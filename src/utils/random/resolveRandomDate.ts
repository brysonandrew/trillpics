export const resolveRandomDate =
  (
    from: Date,
    to: Date,
  ) => {
    const date =
      new Date(
        from.getTime() +
          Math.random() *
            (to.getTime() -
              from.getTime()),
      );
    return date.toISOString();
  };
 