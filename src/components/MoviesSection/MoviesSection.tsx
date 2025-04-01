function MovieSection({
  title,
  children,
  ...props
}: { title: string } & React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <h2 className="mb-4 text-3xl font-semibold tracking-tight">{title}</h2>
      {children}
    </div>
  );
}

export default MovieSection;
