import Typography from "@/app/components/ui/Typography/Typography.component";
import semicircle from "@/assets/img/semicircle.svg";
import { DirectRight } from "iconsax-reactjs";
import Image from "next/image";
export function Clip() {
  return (
    <>
      <div className=" w-[566px] h-[514px] relative py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={semicircle}
            alt="Semicircle background"
            className="w-full max-w-[566px] h-auto"
          />
        </div>
        <div className="absolute inset-0">
          <Typography
            variant="heading3"
            weight="semibold"
            className="text-[#ECE4FF]"
          >
            Esta herramienta te permite:
          </Typography>
          <ul className="text-[#ECE4FF]">
            <li className="flex items-stretch">
              <DirectRight />
              <Typography variant="bodyL" weight="medium">
                Gestionar las solicitudes de los clientes de forma eficiente y
                sencilla.
              </Typography>
            </li>
            <li className="flex items-stretch">
              <DirectRight />
              <Typography variant="bodyL" weight="medium">
                Visualizar las transacciones activas y consultar todas las
                realizadas en el último mes dependiendo el rol.
              </Typography>
            </li>
            <li className="flex items-stretch">
              <DirectRight />
              <Typography variant="bodyL" weight="medium">
                Ver el estado actualizado de cada transacción dependiendo el
                rol.
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
