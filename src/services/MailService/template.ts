export const htmlTemplate = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => `<body>
    <table width="100%" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" style="background-color: #00003f;">
                <!-- Center-aligned content -->
                <table width="600" cellspacing="0" cellpadding="0">
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <!-- Content 1 -->
                            <div style="text-align: center;">
                                <h1 style="font-size: 35px;
                                        margin-bottom: 1rem;
                                        color: #d1d5db;">${name} said:</h1>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <!-- Content 2 -->
                            <div style="text-align: center;">
                                <p style="background-color: rgba(0, 0, 63, 0.5);
                                        font-style: italic; color: #d1d5db; font-size: 20px;">${message}</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <!-- Content 3 -->
                            <div">
                                <table cellspacing="0" cellpadding="0" width="100%">
                                    <tr>
                                        <td align="center"
                                            style="border-radius: 0.5rem; padding: 0.5rem 1rem;">
                                            <a href="mailto:${email}" target="_blank"
                                                style="font-size: 1.25rem; line-height: 1rem; font-family: Arial, sans-serif; text-decoration: none; color: #00003f; display: inline-block; background-color: #F6E3BA; padding: 1rem 2rem; border-radius: 0.5rem;">Reply</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>`;
