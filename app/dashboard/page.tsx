import TabNavigation from "../components/TabNavigation";
import DashboardContent from "../components/DashboardContent";

export default function DashboardPage() {
  return (
    <div className="p-4">
      <TabNavigation active="dashboard" />
      <DashboardContent />
    </div>
  );
}
