import { ContentLayout, Header } from '@cloudscape-design/components';
import CompanyTable from '../components/CompanyTable';

export default function Company() {
  return (
    <ContentLayout header={<Header variant="h1">식사임당 ADMIN</Header>}>
      <CompanyTable />
    </ContentLayout>
  );
}
