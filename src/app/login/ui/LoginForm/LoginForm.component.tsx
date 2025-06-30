import Button from "@/app/components/ui/Button/Button.component";
import Typography from "@/app/components/ui/Typography/Typography.component";

export function LoginForm() {
  return (
    <div className="w-full max-w-sm py-21 px-15 bg-(--purple-50) rounded-4xl">
      <form className="space-y-6" action="#">
        <Typography variant="display4" weight="semibold" className="text-(--purple-900) text-center" >
          Inicio de sesión
        </Typography>
		<Typography variant="bodyL" weight="regular" className="text-(--neutral-500) text-center" >
          Utiliza tus credenciales para iniciar sesión
        </Typography>
        <div className="flex flex-col items-stretch">
			<Button size="lg" variant="primary" >
				Ingresar
			</Button>
        </div>
      </form>
    </div>
  );
}
