import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ManualComponent } from './manual/manual.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  standalone: true,
  imports: [CommonModule, TutorialComponent, ManualComponent, HttpClientModule]
})
export class PrincipalComponent {
  selectedTab: string = 'traductor';
  modalAbierto: string | null = null;
  letra: string = '';

  @ViewChild('videoElement', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;

  constructor(
    private http: HttpClient,
    private zone: NgZone
  ) {}

  async encenderCamara() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  
      const video = this.videoElement?.nativeElement || document.querySelector('video');
      if (!video) {
        console.error("No se encontró el elemento <video> en el DOM.");
        return;
      }
  
      video.srcObject = stream;
    } catch (err) {
      console.error("🚫 Error al acceder a la cámara:", err);
    }
  }

  abrirModal(tipo: string): void {
    this.modalAbierto = tipo;
  
    if (tipo === 'senas') {
      this.encenderCamara();
    }
  }
  
  apagarCamara(): void {
    const video: HTMLVideoElement | null = this.videoElement?.nativeElement || document.querySelector('video');
  
    if (video && video.srcObject) {
      const stream = video.srcObject as MediaStream;
  
      stream.getTracks().forEach(track => track.stop());
      video.srcObject = null;
      console.log("🎥 Cámara detenida correctamente.");
    } else {
      console.warn("⚠️ No se encontró el elemento <video> o no hay cámara activa.");
    }
  }
  

  cerrarModal(): void {
    this.modalAbierto = null;
    this.apagarCamara();
    this.letra = '';
  }

  procesarSenia(): void {
    this.letra = ''; 
    const video = this.videoElement?.nativeElement || document.querySelector('video');
    if (!video) {
      console.warn("⚠️ No se encontró el elemento <video>.");
      return;
    }
  
    // Crear un canvas del mismo tamaño del video
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  
    const context = canvas.getContext('2d');
    if (!context) {
      console.error("🚫 No se pudo obtener el contexto del canvas.");
      return;
    }
  
    // Dibujar el frame actual del video en el canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
    // Convertir a blob tipo imagen JPEG
    canvas.toBlob(blob => {
      if (!blob) {
        console.error("🚫 No se pudo generar la imagen.");
        return;
      }
  
      const formData = new FormData();
      formData.append('imagen', blob, 'captura.jpg');
  
      // Enviar al backend
      this.http.post('http://localhost:5000/reconocer-sena', formData).subscribe({
        next: (respuesta: any) => {
          console.log("✅ Respuesta de la API:", respuesta);
          this.zone.run(() => {
            if (respuesta.letra === null) {
              this.letra = 'No se pudo reconocer la seña. Intenta nuevamente.';
            } else {
              this.letra = respuesta.letra;
            }
            
          });
        },
        error: (error) => {
          console.error("❌ Error al enviar la imagen:", error);
        }
      });
  
    }, 'image/jpeg');
  }
  
}