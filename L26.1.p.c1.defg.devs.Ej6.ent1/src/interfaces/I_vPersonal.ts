export interface I_vPersonal {
  get nombre(): string;
  get tipo(): number;
  get salario(): number;
  get bono(): number;
  get peso(): number;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}