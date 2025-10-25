import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SidebarItem } from './SidebarItem';
import { getSidebarConfig } from './sidebarConfig';

export function SidebarContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const content = useMemo(() => {
    const config = getSidebarConfig(location.pathname);

    return {
      ...config,
      renderItem: (item: any) => {
        const handleClick = () => {
          if (config.type === 'project') {
            navigate(`/project/${encodeURIComponent(item.name as string)}`);
          } else if (config.type === 'member') {
            navigate(`/member/${item.id as string}`);
          } else if (config.type === 'recruit') {
            navigate(`/recruit/${item.id as string}`);
          } else if (config.type === 'log') {
            navigate(`/post/${item.id as string}`);
          }
        };

        return (
          <SidebarItem
            key={(item.id as string) || (item.name as string)}
            type={config.type}
            data={item}
            onClick={handleClick}
          />
        );
      },
    };
  }, [location.pathname, navigate]);

  return content;
}
