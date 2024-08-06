import { Button, Card, Icon, IconButton, IconName } from '@grafana/ui';

import { SavedView, useDeleteSavedViewMutation, useEditSavedViewMutation } from '../../../savedviews/api';

type Props = {
  view: SavedView;
};

export function SavedViewCard(props: Props) {
  const [deleteSavedViewMutation] = useDeleteSavedViewMutation();
  const [editSavedViewMutation] = useEditSavedViewMutation();

  const { uid, icon, description, name, url, metadata } = props.view;

  const deleteSavedView = (uid: string) => {
    deleteSavedViewMutation({
      uid,
    });
  };

  const edit = (uid: string) => {
    editSavedViewMutation({
      uid: uid,
      name,
      icon,
      description,
      url: 'UPDATED',
      metadata,
    });
  };

  const iconName = icon as IconName;

  return (
    <Card>
      <Card.Heading>
        {name}
        <Icon name={iconName} />
      </Card.Heading>
      <Card.Meta>{url}</Card.Meta>
      <Card.Description>{description}</Card.Description>
      <Card.Actions>
        <Button key="open" variant="secondary" onClick={() => window.open(url, '_self')}>
          Open
        </Button>
        <Card.SecondaryActions>
          <Button onClick={() => edit(uid || '')}>Edit</Button>
          <IconButton
            key="delete"
            name="trash-alt"
            tooltip="Delete this data source"
            onClick={() => deleteSavedView(uid || '')}
          />
        </Card.SecondaryActions>
      </Card.Actions>
    </Card>
  );
}
