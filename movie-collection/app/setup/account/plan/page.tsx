import { AccountTypeForm } from '@/app/setup/account/plan/_components/account-type.form';
import { Header } from '@/app/setup/account/plan/_components/header';

export default function Page({ params }: { params: { locale: string } }) {
  return (
    <div className="flex flex-col space-y-4">
      <Header params={params} />
      <AccountTypeForm />
    </div>
  );
}
