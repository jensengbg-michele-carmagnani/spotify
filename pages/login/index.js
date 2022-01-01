import { getProviders, signIn } from 'next-auth/react';

const login = (props) => {
  const { provider } = props;
  return (
    <div>
      <img
        className="w-52 mb-5"
        src="image/spotify-logo-png-7057.png"
        alt="logo"
      />
      {Object.values(provider).map((provider) => (
        <div key={provider.name}>
          <button className="">login with </button>
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
