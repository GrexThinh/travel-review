using Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class DataContext(DbContextOptions options) : IdentityDbContext<AppUser, AppRole, Guid,
        IdentityUserClaim<Guid>, AppUserRole, IdentityUserLogin<Guid>, IdentityRoleClaim<Guid>, IdentityUserToken<Guid>>(options)
    {
        public DbSet<ReviewPost> ReviewPosts => Set<ReviewPost>();
        public DbSet<ReviewCategory> ReviewCategories => Set<ReviewCategory>();
        public DbSet<ReviewCommentFeedback> ReviewCommentFeedbacks => Set<ReviewCommentFeedback>();
        public DbSet<ReviewRatingFeedback> ReviewRatingFeedbacks => Set<ReviewRatingFeedback>();
        public DbSet<ReviewReaction> ReviewReactions => Set<ReviewReaction>();
        public DbSet<RatingDetail> RatingDetails => Set<RatingDetail>();

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<AppUser>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.User)
                .HasForeignKey(ur => ur.UserId)
                .IsRequired();

            builder.Entity<AppRole>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.Role)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();

            // ReviewPost -> Author (AppUser) and audit FKs (avoid multiple cascade paths to AspNetUsers)
            builder.Entity<ReviewPost>()
                .HasOne(p => p.CreatedBy)
                .WithMany(u => u.ReviewPosts)
                .HasForeignKey(p => p.CreatedById)
                .OnDelete(DeleteBehavior.Restrict);
            builder.Entity<ReviewPost>()
                .HasOne(p => p.UpdatedBy)
                .WithMany()
                .HasForeignKey(p => p.UpdatedById)
                .OnDelete(DeleteBehavior.NoAction);

            // ReviewCategory audit FKs
            builder.Entity<ReviewCategory>()
                .HasOne(c => c.CreatedBy)
                .WithMany()
                .HasForeignKey(c => c.CreatedById)
                .OnDelete(DeleteBehavior.NoAction);
            builder.Entity<ReviewCategory>()
                .HasOne(c => c.UpdatedBy)
                .WithMany()
                .HasForeignKey(c => c.UpdatedById)
                .OnDelete(DeleteBehavior.NoAction);

            // ReviewPost -> Photos (Photo can be user avatar or review image)
            builder.Entity<Photo>()
                .HasOne(p => p.ReviewPost)
                .WithMany(r => r.Photos)
                .HasForeignKey(p => p.ReviewPostId)
                .OnDelete(DeleteBehavior.Cascade);

            // ReviewPost <-> ReviewCategory many-to-many
            builder.Entity<ReviewPost>()
                .HasMany(p => p.Categories)
                .WithMany(c => c.ReviewPosts);

            // ReviewPost -> RatingDetails (per-dimension ratings)
            builder.Entity<RatingDetail>()
                .HasOne(d => d.ReviewPost)
                .WithMany(p => p.RatingDetails)
                .HasForeignKey(d => d.ReviewPostId)
                .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<RatingDetail>()
                .HasOne(d => d.CreatedBy)
                .WithMany()
                .HasForeignKey(d => d.CreatedById)
                .OnDelete(DeleteBehavior.NoAction);
            builder.Entity<RatingDetail>()
                .HasOne(d => d.UpdatedBy)
                .WithMany()
                .HasForeignKey(d => d.UpdatedById)
                .OnDelete(DeleteBehavior.NoAction);

            // ReviewPost -> RatingFeedbacks (user ratings of the post)
            builder.Entity<ReviewRatingFeedback>()
                .HasOne(f => f.ReviewPost)
                .WithMany(p => p.RatingFeedbacks)
                .HasForeignKey(f => f.ReviewPostId)
                .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<ReviewRatingFeedback>()
                .HasOne(f => f.CreatedBy)
                .WithMany(u => u.RatingFeedbacks)
                .HasForeignKey(f => f.CreatedById)
                .OnDelete(DeleteBehavior.Restrict);
            builder.Entity<ReviewRatingFeedback>()
                .HasOne(f => f.UpdatedBy)
                .WithMany()
                .HasForeignKey(f => f.UpdatedById)
                .OnDelete(DeleteBehavior.NoAction);

            // ReviewPost -> CommentFeedbacks
            builder.Entity<ReviewCommentFeedback>()
                .HasOne(c => c.ReviewPost)
                .WithMany(p => p.CommentFeedbacks)
                .HasForeignKey(c => c.ReviewPostId)
                .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<ReviewCommentFeedback>()
                .HasOne(c => c.CreatedBy)
                .WithMany(u => u.CommentFeedbacks)
                .HasForeignKey(c => c.CreatedById)
                .OnDelete(DeleteBehavior.Restrict);
            builder.Entity<ReviewCommentFeedback>()
                .HasOne(c => c.UpdatedBy)
                .WithMany()
                .HasForeignKey(c => c.UpdatedById)
                .OnDelete(DeleteBehavior.NoAction);
            builder.Entity<ReviewCommentFeedback>()
                .HasOne(c => c.Parent)
                .WithMany(c => c.Replies)
                .HasForeignKey(c => c.ParentId)
                .OnDelete(DeleteBehavior.Restrict);

            // ReviewReaction: on Post OR on Comment, by User
            builder.Entity<ReviewReaction>()
                .HasOne(r => r.CreatedBy)
                .WithMany(u => u.Reactions)
                .HasForeignKey(r => r.CreatedById)
                .OnDelete(DeleteBehavior.Restrict);
            builder.Entity<ReviewReaction>()
                .HasOne(r => r.UpdatedBy)
                .WithMany()
                .HasForeignKey(r => r.UpdatedById)
                .OnDelete(DeleteBehavior.NoAction);
            builder.Entity<ReviewReaction>()
                .HasOne(r => r.ReviewPost)
                .WithMany(p => p.Reactions)
                .HasForeignKey(r => r.ReviewPostId)
                .OnDelete(DeleteBehavior.NoAction);
            builder.Entity<ReviewReaction>()
                .HasOne(r => r.ReviewCommentFeedback)
                .WithMany(c => c.Reactions)
                .HasForeignKey(r => r.ReviewCommentFeedbackId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
