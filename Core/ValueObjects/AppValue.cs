using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.ValueObjects
{
    public class AppValue
    {
        public enum ActiveFlag : byte
        {
            Active = 1,
            Deactive = 2,
            Delete = 3
        }
        public enum ReactionType : byte
        {
            Like = 1,
            Love = 2,
            Wow = 3,
            Sad = 4,
            Angry = 5
        }
    }
}
