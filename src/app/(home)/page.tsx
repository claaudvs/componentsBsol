import Breadcrumb from "../components/ui/Breadcrumb/Breadcrumb.component";
import Typography from "../components/ui/Typography/Typography.component";

export default function HomePage() {
  const path = [
    { label: 'Mesa de Dinero', href: '/home' },
    { label: 'Jefe Nacional de Mesa de Dinero y Negocios Internacionales', href: '/boss', current: true },
  ]
  return (
    <>
      <Breadcrumb items={path} />
      <div className="p-4 bg-white rounded-xl shadow-lg h-9/9">
        <Typography variant="display1" weight="bold" className="text-[#46009B]" >
            Bienvenido
            Claudio
        </Typography>
      </div>
    </>
  );
}