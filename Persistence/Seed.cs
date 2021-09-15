using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Movies.Any()) return;

            var movies = new List<Movie>
            {
                new Movie
                {

                    title = "The matrix",
                    desc = "test desc",
                    img = "https://assets.imgix.net/unsplash/bridge.jpg",
                    imgTitle = "The Matrix",
                    imgSm = "https://assets.imgix.net/unsplash/bridge.jpg",
                    trailer = "https://vimeo.com/546472954",
                    video = "https://vimeo.com/546472954",
                    year = "2000",
                    limit = 16,
                    genre = "comedy",
                    isSeries = false,
                },
                  new Movie
                {

                    title = "spiderman",
                    desc = "test desc2",
                    img = "https://assets.imgix.net/unsplash/turntable.jpg",
                    imgTitle = "Spiderman",
                    imgSm = "https://assets.imgix.net/unsplash/turntable.jpg",
                    trailer = "https://www.youtube.com/watch?v=rt-2cxAiPJk",
                    video = "https://www.youtube.com/watch?v=rt-2cxAiPJk",
                    year = "2015",
                    limit = 15,
                    genre = "comedy",
                    isSeries = false,
                },
                new Movie
                {

                    title = "marvel",
                    desc = "test desc3",
                    img = "https://assets.imgix.net/examples/kingfisher.jpg",
                    imgTitle = "Marvel",
                    imgSm = "https://assets.imgix.net/examples/kingfisher.jpg",
                    trailer = "https://www.youtube.com/watch?v=5VYb3B1ETlk",
                    video = "https://www.youtube.com/watch?v=5VYb3B1ETlk",
                    year = "2020",
                    limit = 16,
                    genre = "action",
                    isSeries = false,
                },
                new Movie
                {

                    title = "himym",
                    desc = "test desc4",
                    img = "https://assets.imgix.net/unsplash/paperlamp.jpg",
                    imgTitle = "Himym",
                    imgSm = "https://assets.imgix.net/unsplash/paperlamp.jpg",
                    trailer = "https://www.youtube.com/watch?v=C8-4jMTOUJI",
                    video = "https://www.youtube.com/watch?v=C8-4jMTOUJI",
                    year = "2001",
                    limit = 17,
                    genre = "comedy",
                    isSeries = true,
                },
                new Movie
                {

                    title = "modern family",
                    desc = "test desc5",
                    img = "https://assets.imgix.net/unsplash/motorbike.jpg?__hstc=158051173.f28454706aca36acc98f7b5490e3215c.1631693507673.1631693507673.1631693507673.1&__hssc=158051173.27.1631693507674&__hsfp=728737239",
                    imgTitle = "Modern family",
                    imgSm = "https://assets.imgix.net/unsplash/motorbike.jpg?__hstc=158051173.f28454706aca36acc98f7b5490e3215c.1631693507673.1631693507673.1631693507673.1&__hssc=158051173.27.1631693507674&__hsfp=728737239",
                    trailer = "https://www.youtube.com/watch?v=Ub_lfN2VMIo",
                    video = "https://www.youtube.com/watch?v=Ub_lfN2VMIo",
                    year = "2005",
                    limit = 16,
                    genre = "comedy",
                    isSeries = true,
                }
            };

            await context.Movies.AddRangeAsync(movies);
            await context.SaveChangesAsync();
        }
    }
}