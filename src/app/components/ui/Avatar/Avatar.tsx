interface AvatarProp {
  name: string;
}
const Avatar = ({ name }: AvatarProp) => {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-(--purple-100) rounded-full">
      <span className="font-medium text-(--purple-900)">
        {name}
      </span>
    </div>
  );
};

export default Avatar;
