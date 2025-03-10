﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20210914213127_InitialCreatee")]
    partial class InitialCreatee
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.10");

            modelBuilder.Entity("Domain.Movie", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("desc")
                        .HasColumnType("TEXT");

                    b.Property<string>("genre")
                        .HasColumnType("TEXT");

                    b.Property<string>("img")
                        .HasColumnType("TEXT");

                    b.Property<string>("imgSm")
                        .HasColumnType("TEXT");

                    b.Property<string>("imgTitle")
                        .HasColumnType("TEXT");

                    b.Property<bool>("isSeries")
                        .HasColumnType("INTEGER");

                    b.Property<int>("limit")
                        .HasColumnType("INTEGER");

                    b.Property<string>("title")
                        .HasColumnType("TEXT");

                    b.Property<string>("trailer")
                        .HasColumnType("TEXT");

                    b.Property<string>("video")
                        .HasColumnType("TEXT");

                    b.Property<string>("year")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Movies");
                });
#pragma warning restore 612, 618
        }
    }
}
