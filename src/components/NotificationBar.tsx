import { Link } from "react-router-dom";
import { Bell, X } from "lucide-react";
import { useState } from "react";

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-secondary text-secondary-foreground py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bell className="h-4 w-4" />
          <span className="text-sm font-medium">
            <Link to="/notifications/ssc-je-2025" className="hover:underline">
              SSC JE 2025 – Click to View
            </Link>
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-secondary-foreground hover:text-accent-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default NotificationBar;