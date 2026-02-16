using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateReviewTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RatingDetails_AspNetUsers_CreatedById",
                table: "RatingDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_RatingDetails_AspNetUsers_UpdatedById",
                table: "RatingDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_ReviewCategories_AspNetUsers_CreatedById",
                table: "ReviewCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_ReviewCategories_AspNetUsers_UpdatedById",
                table: "ReviewCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_ReviewCommentFeedbacks_AspNetUsers_UpdatedById",
                table: "ReviewCommentFeedbacks");

            migrationBuilder.DropForeignKey(
                name: "FK_ReviewPosts_AspNetUsers_UpdatedById",
                table: "ReviewPosts");

            migrationBuilder.DropForeignKey(
                name: "FK_ReviewRatingFeedbacks_AspNetUsers_UpdatedById",
                table: "ReviewRatingFeedbacks");

            migrationBuilder.DropForeignKey(
                name: "FK_ReviewReactions_AspNetUsers_UpdatedById",
                table: "ReviewReactions");

            migrationBuilder.AddForeignKey(
                name: "FK_RatingDetails_AspNetUsers_CreatedById",
                table: "RatingDetails",
                column: "CreatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_RatingDetails_AspNetUsers_UpdatedById",
                table: "RatingDetails",
                column: "UpdatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewCategories_AspNetUsers_CreatedById",
                table: "ReviewCategories",
                column: "CreatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewCategories_AspNetUsers_UpdatedById",
                table: "ReviewCategories",
                column: "UpdatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewCommentFeedbacks_AspNetUsers_UpdatedById",
                table: "ReviewCommentFeedbacks",
                column: "UpdatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewPosts_AspNetUsers_UpdatedById",
                table: "ReviewPosts",
                column: "UpdatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewRatingFeedbacks_AspNetUsers_UpdatedById",
                table: "ReviewRatingFeedbacks",
                column: "UpdatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewReactions_AspNetUsers_UpdatedById",
                table: "ReviewReactions",
                column: "UpdatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RatingDetails_AspNetUsers_CreatedById",
                table: "RatingDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_RatingDetails_AspNetUsers_UpdatedById",
                table: "RatingDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_ReviewCategories_AspNetUsers_CreatedById",
                table: "ReviewCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_ReviewCategories_AspNetUsers_UpdatedById",
                table: "ReviewCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_ReviewCommentFeedbacks_AspNetUsers_UpdatedById",
                table: "ReviewCommentFeedbacks");

            migrationBuilder.DropForeignKey(
                name: "FK_ReviewPosts_AspNetUsers_UpdatedById",
                table: "ReviewPosts");

            migrationBuilder.DropForeignKey(
                name: "FK_ReviewRatingFeedbacks_AspNetUsers_UpdatedById",
                table: "ReviewRatingFeedbacks");

            migrationBuilder.DropForeignKey(
                name: "FK_ReviewReactions_AspNetUsers_UpdatedById",
                table: "ReviewReactions");

            migrationBuilder.AddForeignKey(
                name: "FK_RatingDetails_AspNetUsers_CreatedById",
                table: "RatingDetails",
                column: "CreatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RatingDetails_AspNetUsers_UpdatedById",
                table: "RatingDetails",
                column: "UpdatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewCategories_AspNetUsers_CreatedById",
                table: "ReviewCategories",
                column: "CreatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewCategories_AspNetUsers_UpdatedById",
                table: "ReviewCategories",
                column: "UpdatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewCommentFeedbacks_AspNetUsers_UpdatedById",
                table: "ReviewCommentFeedbacks",
                column: "UpdatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewPosts_AspNetUsers_UpdatedById",
                table: "ReviewPosts",
                column: "UpdatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewRatingFeedbacks_AspNetUsers_UpdatedById",
                table: "ReviewRatingFeedbacks",
                column: "UpdatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewReactions_AspNetUsers_UpdatedById",
                table: "ReviewReactions",
                column: "UpdatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
