import { getProviders, signIn } from 'next-auth/react';

const login = (props) => {
  const { providers } = props;
  console.log(Object.values(providers));
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black ">
      <img
        className="w-52 mb-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/168px-Spotify_logo_without_text.svg.png"
        
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-while p-5 rounded-full hover:text-white"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
