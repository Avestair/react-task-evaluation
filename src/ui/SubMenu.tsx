import SubMenuItem from "./SubMenuItem";

interface SubMenuItemType {
  name: string;
}

export interface SubMenuProps {
  items?: SubMenuItemType[] | null;
}

export default function SubMenu({ items = [] }: SubMenuProps) {
  const safeItems = items || [];

  return (
    <div className="grid mt-4 px-4.5">
      {safeItems.map((item, index) => (
        <SubMenuItem key={index} name={item.name} />
      ))}
    </div>
  );
}
