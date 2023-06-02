import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";

interface Props {
  activity: Activity | undefined;
  cancelSelectActivity: () => void;
  handleFormOpen: (id: string) => void;
  closeForm: () => void;
}

function ActivityDetails({
  activity,
  cancelSelectActivity,
  handleFormOpen,
  closeForm,
}: Props) {
  return activity ? (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity?.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity?.title}</Card.Header>
        <Card.Meta>
          <span>{activity?.date}</span>
        </Card.Meta>
        <Card.Description>{activity?.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths='2'>
          <Button
            onClick={() => handleFormOpen(activity.id)}
            basic
            color='blue'
            content='Edit'
          />
          <Button
            onClick={() => cancelSelectActivity()}
            basic
            color='grey'
            content='Cancel'
          />
        </Button.Group>
      </Card.Content>
    </Card>
  ) : null;
}
export default ActivityDetails;
