import React from 'react';
import styled from 'styled-components';

const Key = () => (
  <svg viewBox="0 0 280.062 280.062">
    <path fill="#EFC75E" d="M262.797 219.065c-1.636-1.505-17.773-.464-17.773-.464l-.184-17.072-7.893-9.022-18.71-.306-.017-.026c-.08.254-.01-18.78-.01-18.78l-8.732-6.326s-16.985-.5-17.125-.63l-1.365-17.45-15.725-18.612c5.434-11.726 8.567-24.756 8.567-38.54 0-50.71-41.147-91.822-91.9-91.822C41.146.004 0 41.116 0 91.827c0 50.72 41.147 91.84 91.91 91.84 14.08 0 27.373-3.264 39.3-8.926L235.74 279.9s44.252.122 44.252.105l.07-44.664s-6.948-6.772-17.265-16.275zM74.374 96.378c-12.032 0-21.78-9.81-21.78-21.912s9.747-21.92 21.78-21.92 21.79 9.817 21.79 21.92-9.758 21.912-21.79 21.912z"/>
    <path fill="#CA9F30" d="M74.39 43.767c-16.914 0-30.627 13.713-30.627 30.628s13.713 30.628 30.628 30.628c16.925 0 30.63-13.713 30.63-30.628S91.314 43.767 74.39 43.767zm0 43.755c-7.245 0-13.125-5.88-13.125-13.126 0-7.254 5.88-13.126 13.126-13.126 7.247 0 13.127 5.872 13.127 13.126 0 7.245-5.88 13.126-13.126 13.126zM152.24 161.01c-8.358 7.282-18.028 13.03-28.625 16.943L227.53 280.05h43.755L152.24 161.01z"/>
  </svg>
);

const TeamMemberStyle = styled.span`
  display: flex;
  flex-direction: column;
`;

const TeamMemberPictureStyle = styled.img.attrs({
  src: props => props.picture
})`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  // border-top-left-radius: 5px;
  // border-top-right-radius: 5px;
`;

const PictureContainer = styled.div`
  position: relative;
  padding: 5px 0 0 5px;
  &:hover {
    cursor: pointer;

  }
`;

const PictureOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 5px;
  border-radius: 5px;
`;

const TeamMemberPicture = ({picture, role}) => (
  <PictureContainer>
    <TeamMemberPictureStyle picture={picture} />
      {role === 'scrum-master' && (
          <PictureOverlay>
            <Key />
          </PictureOverlay>
      )}
  </PictureContainer>
);

const TeamMemberName = styled.span``;

const TeamMember = ({name, picture, role}) => (
  <TeamMemberStyle>
    <TeamMemberPicture picture={picture} role={role}/>
    {/* <TeamMemberName>{name}</TeamMemberName> */}
  </TeamMemberStyle>
);

const TeamMemberPanelStyle = styled.div`
  display: flex;
`;

const tempTeamMembers = [
  {
    name: 'enzo',
    picture: 'http://img.news.sina.com/p/2012/0626/U45P5029T2D480395F24DT20120626162552.jpg',
    role: 'scrum-master',
  }, {
    name: 'enzo',
    picture: 'http://img.news.sina.com/p/2012/0626/U45P5029T2D480395F24DT20120626162552.jpg',
    role: 'user',
  }, {
    name: 'enzo',
    picture: 'http://img.news.sina.com/p/2012/0626/U45P5029T2D480395F24DT20120626162552.jpg',
    role: 'user',
  }, {
    name: 'enzo',
    picture: 'http://img.news.sina.com/p/2012/0626/U45P5029T2D480395F24DT20120626162552.jpg',
    role: 'user',
  }, {
    name: 'enzo',
    picture: 'http://img.news.sina.com/p/2012/0626/U45P5029T2D480395F24DT20120626162552.jpg',
    role: 'user',
  }, {
    name: 'enzo',
    picture: 'http://img.news.sina.com/p/2012/0626/U45P5029T2D480395F24DT20120626162552.jpg',
    role: 'user',
  },
]

const TeamMembersPanel = ({teamMembers = tempTeamMembers}) => (
  <TeamMemberPanelStyle>
    {teamMembers.map(tm => <TeamMember {...tm} />)}
  </TeamMemberPanelStyle>
);

export { TeamMembersPanel };
