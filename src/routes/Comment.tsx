interface Prop {
  reply: string;
}

const Comment: React.FC<Prop> = ({ reply }: Prop) => {
  return (
    <div>
      <p>{reply}</p>
    </div>
  );
};

export default Comment;
