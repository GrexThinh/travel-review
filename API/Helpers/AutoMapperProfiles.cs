using API.DTOs;
using AutoMapper;
using Core.Entities;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            //CreateMap<AppUser, MemberDto>()
            //    .ForMember(d => d.Age, o => o.MapFrom(s => s.DateOfBirth.CalculateAge()))
            //    .ForMember(d => d.PhotoUrl, o =>
            //        o.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain)!.Url));
            //CreateMap<Photo, PhotoDto>();
            //CreateMap<MemberUpdateDto, AppUser>();
            CreateMap<RegisterDto, AppUser>();
            CreateMap<ReviewPost, ReviewPostDto>();
            CreateMap<Photo, PhotoDto>();
            CreateMap<AppUser, UserDto>();
            CreateMap<ReviewCategory, ReviewCategoryDto>();
            CreateMap<ReviewReaction, ReviewReactionDto>();
            CreateMap<ReviewCommentFeedback, ReviewCommentFeedbackDto>();
            CreateMap<ReviewRatingFeedback, ReviewRatingFeedbackDto>();
            CreateMap<RatingDetail, RatingDetailDto>();
            CreateMap<string, DateOnly>().ConvertUsing(s => DateOnly.Parse(s));
            //CreateMap<Message, MessageDto>()
            //    .ForMember(d => d.SenderPhotoUrl, o => o.MapFrom(s => s.Sender.Photos.FirstOrDefault(x => x.IsMain)!.Url))
            //    .ForMember(d => d.RecipientPhotoUrl, o => o.MapFrom(s => s.Recipient.Photos.FirstOrDefault(x => x.IsMain)!.Url));
            CreateMap<DateTime, DateTime>().ConvertUsing(d => DateTime.SpecifyKind(d, DateTimeKind.Utc));
            CreateMap<DateTime?, DateTime?>().ConvertUsing(d => d.HasValue ? DateTime.SpecifyKind(d.Value, DateTimeKind.Utc) : null);
            //CreateMap<FanGroupCreateDto, FanGroup>();
            //CreateMap<FanGroup, FanGroupDto>();
            //CreateMap<FanGroupUpdateDto, FanGroup>();
            //CreateMap<GroupEventCreateDto, GroupEvent>();
            //CreateMap<GroupEventUpdateDto, GroupEvent>();
            //CreateMap<GroupEventComment, GroupEventCommentDto>();
            //CreateMap<GroupEventUser, GroupEventUserDto>();
            //CreateMap<GroupPostCreateDto, GroupPost>();
            //CreateMap<GroupPostUpdateDto, GroupPost>();
            //CreateMap<GroupPostComment, GroupPostCommentDto>();
            //CreateMap<GroupPostReaction, GroupPostReactionDto>();
            //CreateMap<GroupPost, GroupPostDto>();
            //CreateMap<GroupMessage, GroupMessageDto>()
            //      .ForMember(d => d.SenderPhotoUrl, o => o.MapFrom(s => s.Sender.Photos.FirstOrDefault(x => x.IsMain)!.Url));
        }
    }
}
