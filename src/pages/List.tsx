import Link from 'next/link';
import { VehiclePerson } from '../../api/VehiclePerson';

export interface ListProps {
  ownersList: VehiclePerson[] | undefined;
}

export default function List({ ownersList }: ListProps) {
  return (
    <div>
      <h1>Detail pages</h1>
      {ownersList.map((e, idx) => (
        <div key={idx}>
          <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
            <a>
              Navigate to {e.ownerName}'s {e.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

List.getInitialProps = async () => {
  const response = await fetch('http://localhost:4001/vehicles');
  const ownersList: VehiclePerson[] | undefined = await response.json();
  return { ownersList };
};
