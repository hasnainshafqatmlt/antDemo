/*
 * Artist
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';

import { Descriptions, Avatar, Icon } from 'antd';

class SingleList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  render() {
    const {
      artist,
      num
    } = this.props;
  

    return (
      <div className='mb-4'>
        <Descriptions
          title=""
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
          size='small'
        >
          <Descriptions.Item label="Artist Name">{artist.name}</Descriptions.Item>
          <Descriptions.Item label="Avatar">
            <Avatar
              src={artist.picture}
              alt="Solo"
            />
          </Descriptions.Item>
          <Descriptions.Item label="wikipedia">
            <a href={artist.link} target="_blank">Visit Page</a>
            <div className='pull-right'>
              <Icon type="edit" onClick={() => this.props.requestEditArtists(artist, num)} />
              &nbsp;&nbsp;
              <Icon type="delete" onClick={() => this.props.requestDeleteArtists(num)} />
            </div>
          </Descriptions.Item>
          <Descriptions.Item label="Contry">{artist.country}</Descriptions.Item>
          <Descriptions.Item label="City">{artist.city}</Descriptions.Item>
          <Descriptions.Item label="Date of Birth">{artist.dateOfBirth}</Descriptions.Item>

          <Descriptions.Item label="Discography">{artist.discography}</Descriptions.Item>
          <Descriptions.Item label="Genre">{artist.genre}</Descriptions.Item>
          <Descriptions.Item label="Style">{artist.style}</Descriptions.Item>

          <Descriptions.Item label="Short Summary">
            {artist.bio}
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

export default SingleList;