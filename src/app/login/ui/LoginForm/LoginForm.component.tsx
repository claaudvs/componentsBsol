import Button from "@/app/components/ui/Button/Button.component";

export function LoginForm() {
  return (
    <>
      <div className="flex flex-col">
        <Button size="md" variant="secondary" className="mb-4">Ingresar</Button>
        <Button size="md" variant="tertiary" >Iniciar sesión con otro usuario</Button>
      </div>
    </>
  );
}
