using System.ComponentModel.DataAnnotations;

namespace API.DTOS
{
  public class RegisterDto
  {
    [Required]
    public string DisplayName { get; set; }
    [Required]
    public string UserName { get; set; }
    [Required]
    [EmailAddress]
    public string Email { get; set; }
    [Required]
    [RegularExpression(@"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,8}$", ErrorMessage = "Password must have at least one uppercase letter, one lowercase letter and one number")]
    public string Password { get; set; }
  }
}