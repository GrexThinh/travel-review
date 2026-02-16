using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateReviewTables2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReviewReactions_ReviewCommentFeedbacks_ReviewCommentFeedbackId",
                table: "ReviewReactions");

            migrationBuilder.DropForeignKey(
                name: "FK_ReviewReactions_ReviewPosts_ReviewPostId",
                table: "ReviewReactions");

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewReactions_ReviewCommentFeedbacks_ReviewCommentFeedbackId",
                table: "ReviewReactions",
                column: "ReviewCommentFeedbackId",
                principalTable: "ReviewCommentFeedbacks",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewReactions_ReviewPosts_ReviewPostId",
                table: "ReviewReactions",
                column: "ReviewPostId",
                principalTable: "ReviewPosts",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReviewReactions_ReviewCommentFeedbacks_ReviewCommentFeedbackId",
                table: "ReviewReactions");

            migrationBuilder.DropForeignKey(
                name: "FK_ReviewReactions_ReviewPosts_ReviewPostId",
                table: "ReviewReactions");

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewReactions_ReviewCommentFeedbacks_ReviewCommentFeedbackId",
                table: "ReviewReactions",
                column: "ReviewCommentFeedbackId",
                principalTable: "ReviewCommentFeedbacks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ReviewReactions_ReviewPosts_ReviewPostId",
                table: "ReviewReactions",
                column: "ReviewPostId",
                principalTable: "ReviewPosts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
