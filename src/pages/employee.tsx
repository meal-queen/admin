import { ContentLayout, Header } from '@cloudscape-design/components';
import EmployeeTable from '../components/EmployeeTable';

export default function Employee() {
  return (
    <ContentLayout header={<Header variant="h1">식사임당 ADMIN</Header>}>
      <EmployeeTable />
    </ContentLayout>
  );
}
