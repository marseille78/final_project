import * as React from 'react';
import { IMedia } from "../../types";
import { MediaListItemComponent } from "./MediaListItem.Component";

interface Props {
  mediaList: Array<IMedia>;
}

export const MediaListComponent: React.SFC<Props> = (props: Props) => {
  let content;
  if (props.mediaList === undefined) {
    content = <h2>Loading...</h2>;
  } else {
    content = props.mediaList.map((item: IMedia) => {
      const {id, created_time, likes, comments} = item;
      const {url} = item.images.low_resolution;

      return (
        <MediaListItemComponent
          key={id}
          img_url={url}
          created_time={created_time}
          likes={likes.count}
          comments={comments.count}
        />
      );
    });
  }
  return (
    <div className="media-list">
      {content}
    </div>
  );
};