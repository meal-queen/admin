import { ContentLayout, Header } from '@cloudscape-design/components';
import WaitTable from '../components/WaitTable';

export default function Employee() {
  return (
    <ContentLayout header={<Header variant="h1">식사임당 ADMIN</Header>}>
      <WaitTable />
    </ContentLayout>
  );
}
