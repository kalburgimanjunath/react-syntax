import React, { useState } from 'react';
import { Logo, Avatar, Game } from '../components/index';
import Speech from 'react-speech';

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
      description:
        'We can use this count variable directly to display the count. Now, we’ll update the store and for that, we’ll need action which can be exported from the slice instance.',
      date: '10-20-2022',
    },
    {
      id: 2,
      title: 'new podcast2',
      description: `Besides being a time-tracking addict, I’m also a sucker for completing stuff in a neat-looking checklist. For example, I have a course development framework on Notion. I urge you to make one yourself or copy mine, as checking those items gives much-needed support and motivation.`,
      date: '10-20-2022',
    },
    {
      id: 3,
      title: 'new podcast3',
      description: `Being a software developer, I know the benefits of frameworks and guidelines. However, while they restrain you, they also deprive you of the necessity to be excessively creative. And there would be a few places to apply your creativity. With that in mind, I’ve developed a typical structure of tutorials and a presentation template to keep me within some style boundaries. Both these tricks made a significant improvement in my performance.`,
      date: '10-20-2022',
    },
  ];
  const [episod, episodQuery] = useState(null);
  const [desc, setDesc] = useState(podcast[0]);
  const playsound = () => {
    const text = 'hello world';
  };

  const textstyle = {
    play: {
      hover: {
        backgroundColor: 'black',
        color: 'white',
      },
      button: {
        padding: '4',
        fontFamily: 'Helvetica',
        fontSize: '1.0em',
        cursor: 'pointer',
        pointerEvents: 'none',
        outline: 'none',
        backgroundColor: 'inherit',
        border: 'none',
      },
    },
  };

  const styles = {
    container: {
      display: 'flex',
      padding: 10,
    },
    listcontainer: {
      color: 'white',
      // padding: 20,
      borderRight: '1px solid #202020',
    },
  };
  const pairs = [
    ['the bank', 'el banco'],
    ['the restaurant', 'el restaurante'],
    ['a potato', 'una papa'],
    ['cow', 'vaca'],
    ['chair', 'silla'],
    ["I'm beautiful", 'soy hermoso'],
  ];
  const langA = { code: "en", name: "English" },
  const  langB =  { code: "es", name: "Spanish" },
  // console.log(desc);

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
                  <div
                    key={item.id}
                    className="list"
                    onClick={() => {
                      episodQuery(item.id);
                      const description = podcast.filter((item) => {
                        return item.id === episod;
                      });
                      setDesc(description);
                    }}
                  >
                    <div>EPISOD: {item.id}</div>
                    <div>{item.title}</div>
                  </div>
                );
              })}
            </div>
            <div style={({ padding: 10 }, styles.container)}>
              {/* Play descriptioin */}
              {episod}
              {desc && desc.length > 0 && desc[0].description ? (
                <>
                  <div>
                    <h1>{desc[0].title}</h1>
                    <div>{desc[0].description}</div>
                  </div>
                  <div style={{ textstyle }}>
                    <Speech
                      text={desc[0].description}
                      pitch="1"
                      rate="1"
                      volume="100%"
                      lang="pa-IN"
                      // voice="Olivia"
                      voice="Google IN Punjabi Male"
                      displayText="Play"
                      textAsButton={true}
                    />
                  </div>
                </>
              ) : null}
              {/* <button onClick={() => playsound}>Play</button> */}
            </div>
            
          </div>
          <Game pairs={pairs} langA={langA} langB={langB}/>
        </div>
      </div>
    </div>
  );
}
