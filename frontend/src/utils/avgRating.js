const calculateAvgRating = reviews => {
    //   featured rating counter
    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
    const avgRating =
      totalRating === 0
        ? ""
        : totalRating === 1
        ? totalRating
        : (totalRating / reviews?.length).toFixed(1);
  
    //   end counter
      return{
          totalRating,
          avgRating
      }
  }
  
  export default calculateAvgRating