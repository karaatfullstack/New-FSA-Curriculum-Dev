export default function Profile() {
    return (
      <Avatar
        person={{
          name: "Lin Lanying",
          imageUrl: "https://i.imgur.com/1bX5QH6.jpg",
        }}
        size={100}
      />
    );
  }
  
  function Avatar({ person, size }) {
    return (
      <img
        className="avatar"
        src={person.imageUrl}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }