import Typography from "@/app/components/ui/Typography/Typography.component";

export function Title() {
  return (
    <>
    <div className="py-4">
      <Typography variant="display1" weight="bold" className="text-[#F4F0FF]">Mesa de Dinero</Typography>
      <Typography variant="heading3" weight="medium" className="text-[#FFF4D3] text-center">Una plataforma diseñada para optimizar la gestión de transacciones internacionales.</Typography>
    </div>
    </>
  );
}
