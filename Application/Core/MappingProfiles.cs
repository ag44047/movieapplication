using Application.ListFeatures;
using Application.Movies;
using AutoMapper;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Core
{
     public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Movie, Movie>();
            CreateMap<Listt, Listt>();
            CreateMap<Listt, ListtDto>();
            CreateMap<AppUser, Profile>();
            CreateMap<MovieListt, MovieDto>()
                .ForMember(d => d.Id, o => o.MapFrom(a => a.Movie.Id))
                .ForMember(d => d.title, o => o.MapFrom(a => a.Movie.title))
                .ForMember(d => d.desc, o => o.MapFrom(a => a.Movie.desc))
                .ForMember(d => d.img, o => o.MapFrom(a => a.Movie.img))
                .ForMember(d => d.imgTitle, o => o.MapFrom(a => a.Movie.imgTitle))
                .ForMember(d => d.imgSm, o => o.MapFrom(a => a.Movie.imgSm))
                .ForMember(d => d.trailer, o => o.MapFrom(a => a.Movie.trailer))
                .ForMember(d => d.video, o => o.MapFrom(a => a.Movie.video))
                .ForMember(d => d.year, o => o.MapFrom(a => a.Movie.year))
                .ForMember(d => d.limit, o => o.MapFrom(a => a.Movie.limit))
                .ForMember(d => d.genre, o => o.MapFrom(a => a.Movie.genre))
                .ForMember(d => d.isSeries, o => o.MapFrom(a => a.Movie.isSeries));
            CreateMap<AppUser, Profiles.Profile>()
                .ForMember(d => d.Image, o => o.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain).Url));
        }

    }
}
