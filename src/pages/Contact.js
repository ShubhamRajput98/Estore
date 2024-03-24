import styled from "styled-components";

export const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Contact page</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59266.995427157264!2d80.15401745615915!3d21.811696308182004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a59629b97d1cb%3A0x48cd0fa375dfe590!2sBalaghat%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1670214342585!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/meqdyqvb" className="contact-inputs" method="POST">
          <input type="text" placeholder="username" name="username" required autoComplete="off" />
          <input type="email" placeholder="email" name="email" required autoComplete="off" />
          <textarea name="Message" required autoComplete="off" cols="30" rows="10"></textarea>
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  </Wrapper>;
};

