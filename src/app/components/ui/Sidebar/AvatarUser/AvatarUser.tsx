import Avatar from "../../Avatar/Avatar";
import Typography from "../../Typography/Typography.component";

const AvatarUser = () => {
  return (
    <li className="mb-8">
      <div className="flex flex-row">
        <Avatar name={"CV"} />
        <div className="ml-4 text-(--purple-900)">
            <Typography variant="heading4" weight="semibold">¡Hola, Claudio!</Typography>
            <Typography variant="bodyS" weight="semibold">Gerente Mesa de Dinero</Typography>
        </div>
      </div>
    </li>
  );
}

export default AvatarUser