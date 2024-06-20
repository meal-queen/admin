import { ContentLayout, Header } from '@cloudscape-design/components';
import BusinessTable from '../components/BusinessTable';

export default function Business() {
  return (
    <ContentLayout header={<Header variant="h1">식사임당 ADMIN</Header>}>
      <BusinessTable />
    </ContentLayout>
  );
}
