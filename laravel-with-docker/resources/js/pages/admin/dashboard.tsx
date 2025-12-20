import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

function AdminDashboard() {
  return (
    <>
      <Head title="Admin Dashboard" />

      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">Selamat datang di panel admin.</p>
      </div>
    </>
  );
}

AdminDashboard.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default AdminDashboard;
