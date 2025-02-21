import React, { useState, useEffect } from 'react';
import { 
  Home,
  Settings,
  Users,
  FileText,
  Database,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const Sidebar = () => {
  // Get active path from URL
  const currentPath = window.location.pathname;
  
  // Initialize expanded state from localStorage or default
  const [expanded, setExpanded] = useState(() => {
    const saved = localStorage.getItem('sidebarExpanded');
    return saved ? JSON.parse(saved) : {};
  });

  // Navigation data structure
  const navigation = [
    {
      name: 'Dashboard',
      path: '/',
      icon: Home
    },
    {
      name: 'User Management',
      icon: Users,
      children: [
        { name: 'All Users', path: '/pricing' },
        { name: 'Roles', path: '/users/roles' },
        { name: 'Permissions', path: '/users/permissions' }
      ]
    },
    {
      name: 'Reports',
      icon: FileText,
      children: [
        { name: 'Analytics', path: '/team' },
        { name: 'Sales', path: '/services' },
        { name: 'Performance', path: '/reports/performance' }
      ]
    },
    {
      name: 'Settings',
      path: '/contact',
      icon: Settings,
    },
    {
      name: 'Database',
      icon: Database,
      children: [
        { name: 'Backups', path: '/database/backups' },
        { name: 'Optimization', path: '/database/optimization' }
      ]
    }
  ];

  // Save expanded state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('sidebarExpanded', JSON.stringify(expanded));
  }, [expanded]);

  // Check if a nav item or any of its children is active
  const isActive = (item) => {
    if (item.path) return currentPath === item.path;
    if (item.children) {
      return item.children.some(child => currentPath === child.path);
    }
    return false;
  };

  // Handle click on nav items
  const handleClick = (item) => {
    if (item.children) {
      toggleExpand(item.name);
    } else if (item.path) {
      window.location.href = item.path;
    }
  };

  // Toggle expansion of nav items with children
  const toggleExpand = (name) => {
    setExpanded(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold">Your App</h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4">
        {navigation.map((item) => (
          <div key={item.name} className="mb-2">
            <div
              onClick={() => handleClick(item)}
              className={`
                flex items-center justify-between p-2 rounded-lg cursor-pointer
                ${isActive(item) ? 'text-orange-500 bg-orange-50' : 'text-gray-600 hover:bg-gray-100'}
                ${item.children ? 'mb-1' : ''}
              `}
            >
              <div className="flex items-center gap-3">
                {item.icon && <item.icon className="w-5 h-5" />}
                <span>{item.name}</span>
              </div>
              {item.children && (
                expanded[item.name] ? 
                  <ChevronDown className="w-4 h-4" /> : 
                  <ChevronRight className="w-4 h-4" />
              )}
            </div>
            
            {item.children && (
              <div className={`ml-9 space-y-1 ${expanded[item.name] ? 'block' : 'hidden'}`}>
                {item.children.map((child) => (
                  <a
                    key={child.path}
                    href={child.path}
                    className={`
                      block p-2 rounded-lg
                      ${currentPath === child.path ? 
                        'text-orange-500 bg-orange-50' : 
                        'text-gray-600 hover:bg-gray-100'}
                    `}
                  >
                    {child.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
