import React, { useState } from 'react';
import { Logo, Avatar } from '../components/index';
export default function Home() {
  const user = [
    {
      name: 'Manjunath Manav',
      email: '@manjumanav',
      bio: 'Web Developer, Creator of Level Up Tuts, Bboy, Robotops Crew and Youtuber',
    },
    {
      name: 'Manjunath Kalburgi',
      email: '@manjumanav',
      bio: 'Full Stack JavaScript Developer. Creator of really good web development courses',
    },
  ];
  const podcast = [
    {
      id: 1,
      title: 'new podcast1',
      description: 'description goes here',
      date: '10-20-2022',
    },
    {
      id: 2,
      title: 'new podcast2',
      description: 'description goes here',
      date: '10-20-2022',
    },
    {
      id: 3,
      title: 'new podcast3',
      description: 'description goes here',
      date: '10-20-2022',
    },
  ];
  const [episod, episodQuery] = useState(null);
  const [desc, setDesc] = useState([]);

  const styles = {
    container: {
      display: 'flex',
      padding: 10,
    },
    listcontainer: {
      color: 'white',
      padding: 20,
      borderRight: '1px solid #202020',
    },
    list: {
      color: 'white',
    },
  };
  console.log(desc);
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
      }}
    >
      <Logo />
      <div>
        <h3>A Tasty Treats Podcast for Web Developers.</h3>
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          <Avatar user={user[0]} />
          <Avatar user={user[1]} />
        </div>
        <div
          style={{
            width: '100%',
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          {/* Player container */}
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <div>Play</div>
              <div>Progress</div>
              {/* <div>{title}</div> */}
              <div>Fastness</div>
              <div>Loudness</div>
            </div>
          </div>

          {/* Player container */}
          <div style={{ display: 'flex', backgroundColor: 'gray', margin: 10 }}>
            <div
              style={
                ({ borderRight: '1px solid #202020', padding: 10 },
                styles.listcontainer)
              }
            >
              {/* Play list */}
              {podcast.map((item) => {
                return (
                  <div key={item.id} style={styles.list}>
                    <div>EPISOD: {item.id}</div>
                    <div>{item.title}</div>
                    <button
                      onClick={() => {
                        episodQuery(item.id);
                        const description = podcast.filter((item) => {
                          return item.id == episod;
                        });
                        setDesc(description[0]);
                      }}
                    >
                      Arrow
                    </button>
                  </div>
                );
              })}
            </div>
            <div style={({ padding: 10 }, styles.container)}>
              {/* Play descriptioin */}
              {episod}
              {desc && desc.description ? <div>{desc.title}</div> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
