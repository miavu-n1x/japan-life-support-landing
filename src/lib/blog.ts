export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  keyword: string;
  metaDescription: string;
  tag: string;
  thumbnail: "nenkin" | "tax" | "moving" | "saving" | "sale";
  intro: string;
  sections: BlogSection[];
  checklist: string[];
  faq: BlogFaq[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Nhận được giấy Nenkin thì phải làm gì?",
    slug: "nhan-duoc-giay-nenkin-thi-phai-lam-gi",
    keyword: "nenkin là gì nhật",
    metaDescription:
      "Nhận được giấy Nenkin ở Nhật thì nên kiểm tra gì, khi nào cần đóng và nếu chưa đóng được thì xử lý ra sao. Checklist dễ hiểu cho người Việt.",
    tag: "Nenkin",
    thumbnail: "nenkin",
    intro:
      "Nếu bạn mới sống ở Nhật, lần đầu nhận giấy Nenkin thường sẽ hơi hoang mang. Trên giấy có nhiều chữ, nhiều mã số, nhìn giống một khoản phải đóng ngay nhưng không phải ai cũng hiểu mình đang cầm giấy gì. Mình từng mất khá lâu mới hiểu nên bắt đầu từ đâu, nên bài này viết theo cách đơn giản nhất.",
    sections: [
      {
        heading: "Nenkin là gì, nói đơn giản là gì?",
        paragraphs: [
          "Nenkin là hệ thống lương hưu của Nhật. Hiểu đơn giản, đây là khoản bảo hiểm hưu trí mà người sống và làm việc ở Nhật thường phải tham gia tùy theo tình trạng đi học, đi làm, phụ thuộc gia đình hoặc tự đóng.",
          "Nếu bạn đi làm công ty, nhiều trường hợp Nenkin đã được trừ cùng lương qua shakai hoken. Nếu bạn là du học sinh, làm baito, nghỉ việc hoặc chuyển trạng thái cư trú, bạn có thể nhận giấy liên quan đến Kokumin Nenkin, tức phần cần tự kiểm tra và xử lý.",
        ],
      },
      {
        heading: "Khi nào bạn cần đóng Nenkin?",
        paragraphs: [
          "Thông thường, nếu bạn từ 20 đến dưới 60 tuổi và đang cư trú tại Nhật, bạn cần có trạng thái tham gia Nenkin phù hợp. Nhưng cách đóng không giống nhau cho mọi người.",
          "Người đi làm full-time có thể đang đóng qua công ty. Người chưa đi làm, nghỉ việc, chuyển việc, du học sinh hoặc người thu nhập thấp có thể cần tự đóng, xin miễn giảm, hoặc làm thủ tục hoãn tùy trường hợp.",
        ],
      },
      {
        heading: "Nếu chưa đóng hoặc bỏ qua giấy thì sao?",
        paragraphs: [
          "Việc bỏ qua giấy không làm vấn đề biến mất. Bạn có thể tiếp tục nhận giấy nhắc, bị tính là chưa đóng, hoặc sau này gặp rắc rối khi cần xác nhận quá trình tham gia.",
          "Nếu hiện tại chưa đủ tiền đóng, đừng vội hoảng. Nhiều trường hợp có thể hỏi về miễn giảm hoặc hoãn đóng. Điều quan trọng là bạn nên kiểm tra đúng loại giấy và hỏi lại cơ quan phụ trách trước khi để quá lâu.",
        ],
      },
    ],
    checklist: [
      "Kiểm tra tên, địa chỉ, mã số cá nhân hoặc số Nenkin trên giấy.",
      "Xem giấy yêu cầu đóng tiền, giấy thông báo hay giấy nhắc.",
      "Kiểm tra giai đoạn được ghi trên giấy là tháng nào, năm nào.",
      "Nếu đang đi làm công ty, hỏi công ty xem bạn đã tham gia shakai hoken chưa.",
      "Nếu chưa đóng được, hỏi kuyakusho hoặc nenkin office về miễn giảm hoặc hoãn đóng.",
      "Giữ lại giấy và biên lai, không vứt ngay cả khi đã xử lý xong.",
    ],
    faq: [
      {
        question: "Nhận giấy Nenkin có nghĩa là phải đóng ngay không?",
        answer:
          "Không phải lúc nào cũng vậy. Có giấy là bạn cần kiểm tra nội dung. Có giấy là thông báo, có giấy là yêu cầu đóng, có giấy là nhắc chưa xử lý.",
      },
      {
        question: "Du học sinh có phải đóng Nenkin không?",
        answer:
          "Nhiều du học sinh vẫn thuộc diện cần tham gia, nhưng có thể hỏi về thủ tục miễn giảm hoặc hoãn đóng nếu thu nhập thấp.",
      },
      {
        question: "Không hiểu giấy thì nên hỏi ở đâu?",
        answer:
          "Bạn có thể hỏi kuyakusho nơi đang ở hoặc văn phòng Nenkin gần nhất. Khi đi nên mang giấy nhận được, thẻ cư trú và My Number nếu có.",
      },
    ],
  },
  {
    title: "Giấy báo thuế ở Nhật: cần làm gì khi nhận được?",
    slug: "giay-bao-thue-o-nhat-can-lam-gi-khi-nhan-duoc",
    keyword: "giấy thuế nhật",
    metaDescription:
      "Hướng dẫn đọc giấy báo thuế ở Nhật cho người Việt: phần nào quan trọng, khi nào cần hỏi lại và checklist xử lý khi nhận được giấy thuế.",
    tag: "Thuế",
    thumbnail: "tax",
    intro:
      "Giấy thuế ở Nhật thường đến rất đúng lúc mình không muốn nhận giấy nhất. Nhìn nhiều cột, nhiều số tiền, nhiều kỳ hạn nên dễ có cảm giác chỉ cần đóng là xong. Nhưng trước khi đóng, bạn nên nhìn qua vài phần quan trọng để tránh đóng nhầm hoặc bỏ lỡ thông tin cần hỏi lại.",
    sections: [
      {
        heading: "Giấy báo thuế thường nói điều gì?",
        paragraphs: [
          "Giấy báo thuế thường cho biết bạn phải đóng khoản thuế nào, số tiền bao nhiêu, chia thành mấy kỳ và hạn đóng từng kỳ là ngày nào.",
          "Tùy nơi ở, giấy có thể liên quan đến thuế cư trú, thông báo điều chỉnh hoặc giấy nhắc đóng. Không phải giấy nào cũng giống nhau, nên điều đầu tiên là xác định tên giấy và kỳ hạn.",
        ],
      },
      {
        heading: "Những phần nên đọc trước",
        paragraphs: [
          "Bạn nên tìm phần tên người nhận, địa chỉ, năm tính thuế, tổng số tiền và hạn đóng. Nếu số tiền cao bất thường, đừng vội kết luận sai ngay, nhưng nên kiểm tra vì có thể liên quan đến thu nhập năm trước.",
          "Nếu bạn có người phụ thuộc, mới chuyển việc, nghỉ việc hoặc đã khai sai thông tin cuối năm, giấy thuế có thể khác với mình tưởng.",
        ],
      },
      {
        heading: "Khi nào nên hỏi lại?",
        paragraphs: [
          "Nên hỏi lại khi tên hoặc địa chỉ sai, số tiền quá khác so với dự kiến, bạn đã chuyển khỏi thành phố đó, hoặc bạn nghĩ thông tin phụ thuộc gia đình chưa được tính.",
          "Mình thấy nhiều bạn ngại hỏi vì sợ tiếng Nhật, nhưng chỉ cần mang giấy ra quầy thuế ở kuyakusho, họ thường có thể chỉ cho bạn phần cần xem. Nếu khó nói, bạn có thể chuẩn bị câu hỏi ngắn trước.",
        ],
      },
    ],
    checklist: [
      "Đọc tên giấy và năm tính thuế.",
      "Kiểm tra tổng số tiền phải đóng.",
      "Xem giấy chia thành mấy kỳ và hạn đóng từng kỳ.",
      "So lại địa chỉ, tên và thông tin cá nhân.",
      "Nếu có người phụ thuộc, kiểm tra xem đã được phản ánh chưa.",
      "Nếu số tiền lạ, hỏi quầy thuế trước khi để quá hạn.",
    ],
    faq: [
      {
        question: "Giấy thuế đến sau khi nghỉ việc có bình thường không?",
        answer:
          "Có thể bình thường. Thuế cư trú thường dựa trên thu nhập năm trước, nên khi nghỉ việc bạn vẫn có thể nhận giấy đóng riêng.",
      },
      {
        question: "Quên đóng một kỳ thì sao?",
        answer:
          "Bạn nên xử lý sớm. Có thể phát sinh giấy nhắc hoặc phí chậm tùy trường hợp và địa phương.",
      },
      {
        question: "Có thể chia nhỏ tiền thuế không?",
        answer:
          "Một số trường hợp có thể trao đổi với quầy thuế nếu thật sự khó đóng đúng hạn, nhưng cần hỏi trực tiếp và càng sớm càng tốt.",
      },
    ],
  },
  {
    title: "Checklist chuyển nhà ở Nhật (đừng bỏ sót bước này)",
    slug: "checklist-chuyen-nha-o-nhat-dung-bo-sot-buoc-nay",
    keyword: "chuyển nhà nhật bản",
    metaDescription:
      "Checklist chuyển nhà ở Nhật theo thứ tự dễ làm: báo chuyển địa chỉ, điện nước gas, bưu điện, bảo hiểm, ngân hàng và những bước dễ bị quên.",
    tag: "Đời sống",
    thumbnail: "moving",
    intro:
      "Chuyển nhà ở Nhật không chỉ là đóng thùng và gọi xe. Phần mệt nhất thường là giấy tờ sau đó: địa chỉ, bưu điện, điện nước gas, ngân hàng, bảo hiểm, sim và rất nhiều nơi nhỏ khác. Đây là checklist mình hay dùng để không bị sót.",
    sections: [
      {
        heading: "Nên bắt đầu từ đâu?",
        paragraphs: [
          "Việc đầu tiên là xác định ngày chuyển nhà và địa chỉ mới. Sau đó bạn lên lịch những việc cần làm trước ngày chuyển, trong ngày chuyển và sau khi đã đến nhà mới.",
          "Nếu chuyển khác thành phố, bạn thường cần làm thủ tục chuyển ra ở nơi cũ và chuyển vào ở nơi mới. Nếu chỉ chuyển trong cùng thành phố, thủ tục có thể đơn giản hơn nhưng vẫn cần báo đổi địa chỉ.",
        ],
      },
      {
        heading: "Thứ tự làm để đỡ rối",
        paragraphs: [
          "Trước ngày chuyển, hãy xử lý hợp đồng nhà, đặt lịch chuyển đồ, báo điện nước gas và làm thủ tục bưu điện chuyển tiếp thư. Những việc này càng làm sớm càng đỡ bị kẹt ngày.",
          "Sau khi chuyển, ưu tiên cập nhật địa chỉ ở kuyakusho, thẻ cư trú nếu cần, ngân hàng, công ty, trường học, sim, bảo hiểm và các dịch vụ đang dùng.",
        ],
      },
      {
        heading: "Bước dễ bị bỏ sót",
        paragraphs: [
          "Nhiều bạn quên đăng ký chuyển tiếp bưu điện. Kết quả là giấy quan trọng vẫn gửi về địa chỉ cũ, đặc biệt là giấy thuế, bảo hiểm hoặc thông báo từ ngân hàng.",
          "Một bước nữa hay quên là cập nhật địa chỉ trên các app mua hàng và thẻ thành viên. Nghe nhỏ nhưng nếu đặt nhầm về nhà cũ thì rất phiền.",
        ],
      },
    ],
    checklist: [
      "Chốt ngày chuyển và địa chỉ mới.",
      "Báo chủ nhà hoặc công ty quản lý theo đúng hạn hợp đồng.",
      "Đặt lịch chuyển đồ hoặc thuê xe.",
      "Báo dừng/mở điện, nước, gas, internet.",
      "Làm thủ tục chuyển tiếp bưu điện.",
      "Làm thủ tục đổi địa chỉ tại kuyakusho.",
      "Cập nhật địa chỉ ngân hàng, công ty, sim, bảo hiểm, app mua hàng.",
    ],
    faq: [
      {
        question: "Chuyển nhà trong cùng thành phố có cần ra kuyakusho không?",
        answer:
          "Thường vẫn cần báo đổi địa chỉ. Tên thủ tục có thể khác với chuyển sang thành phố khác, nhưng bạn không nên bỏ qua.",
      },
      {
        question: "Bưu điện chuyển tiếp thư có mất phí không?",
        answer:
          "Thông thường thủ tục chuyển tiếp thư cơ bản không mất phí, nhưng bạn nên kiểm tra thông tin hiện tại tại bưu điện.",
      },
      {
        question: "Nên làm checklist trước bao lâu?",
        answer:
          "Tốt nhất trước 2 đến 4 tuần, đặc biệt nếu cần hủy nhà, đặt lịch gas hoặc internet.",
      },
    ],
  },
  {
    title: "Cách tiết kiệm chi phí sinh hoạt ở Nhật (thực tế)",
    slug: "cach-tiet-kiem-chi-phi-sinh-hoat-o-nhat-thuc-te",
    keyword: "tiết kiệm ở nhật",
    metaDescription:
      "Kinh nghiệm tiết kiệm chi phí sinh hoạt ở Nhật từ những việc thực tế: siêu thị, sim, điện gas, đi lại, point và cách theo dõi tiền.",
    tag: "Tiết kiệm",
    thumbnail: "saving",
    intro:
      "Tiết kiệm ở Nhật không nhất thiết là sống quá kham khổ. Với mình, cách bền hơn là biết tiền đang đi đâu, chọn lại vài dịch vụ đang dùng và tạo vài thói quen nhỏ. Mỗi khoản có thể không nhiều, nhưng cộng lại sau vài tháng sẽ thấy khác.",
    sections: [
      {
        heading: "Bắt đầu bằng việc nhìn lại chi phí cố định",
        paragraphs: [
          "Tiền nhà, sim, internet, điện, gas, bảo hiểm và đi lại là những khoản nên xem trước. Vì đây là tiền lặp lại mỗi tháng, giảm được một chút sẽ có tác dụng lâu dài.",
          "Có giai đoạn mình chỉ đổi gói sim và xem lại cách dùng điện gas mà mỗi tháng nhẹ đi đáng kể. Không cần đổi tất cả cùng lúc, chỉ cần chọn một khoản dễ xử lý nhất.",
        ],
      },
      {
        heading: "Đi siêu thị có chiến lược hơn",
        paragraphs: [
          "Mình hay xem siêu thị gần nhà có khung giờ giảm giá không, món nào nên mua ở drugstore, món nào nên mua online. Không phải lúc nào mua rẻ nhất cũng tốt, vì mất thời gian quá thì lại mệt.",
          "Một mẹo nhỏ là đừng đi siêu thị khi quá đói. Nghe đơn giản nhưng rất hiệu quả, vì lúc đó mình dễ mua thêm đồ không nằm trong dự định.",
        ],
      },
      {
        heading: "Dùng point nhưng đừng để point điều khiển mình",
        paragraphs: [
          "Point ở Nhật rất tiện, nhưng mình chỉ dùng khi thật sự cần mua. Nếu vì point mà mua thêm đồ không cần, cuối cùng vẫn là tốn tiền.",
          "Bạn có thể chọn 1 đến 2 hệ point chính để dùng thường xuyên thay vì đăng ký quá nhiều app rồi không theo dõi được.",
        ],
      },
    ],
    checklist: [
      "Ghi lại chi phí cố định mỗi tháng.",
      "Kiểm tra gói sim và internet đang dùng.",
      "Xem lại hóa đơn điện, gas, nước trong 3 tháng gần nhất.",
      "Chọn siêu thị/drugstore phù hợp cho từng nhóm đồ.",
      "Dùng point cho món đã định mua, không mua thêm chỉ vì có điểm.",
      "Mỗi tuần xem lại một lần thay vì chờ cuối tháng.",
    ],
    faq: [
      {
        question: "Có nên dùng app quản lý chi tiêu không?",
        answer:
          "Có nếu bạn dùng được đều. Nếu không, ghi chú đơn giản trong điện thoại cũng đủ để bắt đầu.",
      },
      {
        question: "Nên tiết kiệm khoản nào trước?",
        answer:
          "Hãy bắt đầu từ khoản cố định như sim, internet hoặc đi lại vì giảm được là nhẹ đều mỗi tháng.",
      },
      {
        question: "Săn đồ giảm giá có mất thời gian không?",
        answer:
          "Có thể mất nếu làm quá nhiều. Mình chỉ khuyên chọn vài nơi gần nhà hoặc app hay dùng, không cần săn mọi deal.",
      },
    ],
  },
  {
    title: "Săn sale ở Nhật: nên xem ở đâu trước?",
    slug: "san-sale-o-nhat-nen-xem-o-dau-truoc",
    keyword: "săn sale nhật bản",
    metaDescription:
      "Gợi ý nơi săn sale ở Nhật cho người Việt: siêu thị, drugstore, sàn thương mại, coupon, point và cách chọn deal thực tế.",
    tag: "Săn sale",
    thumbnail: "sale",
    intro:
      "Ở Nhật có rất nhiều sale, coupon và point. Nhiều đến mức nếu xem hết thì rất mệt. Mình thường không săn theo kiểu phải rẻ nhất bằng mọi giá, mà ưu tiên nơi dễ dùng, gần thói quen mua sắm và tiết kiệm thật.",
    sections: [
      {
        heading: "Nên xem siêu thị và drugstore gần nhà trước",
        paragraphs: [
          "Những món mua hằng tuần như đồ ăn, giấy, nước giặt, dầu gội thường tiết kiệm tốt nhất khi bạn biết lịch giảm giá của siêu thị hoặc drugstore gần nhà.",
          "Đừng chỉ nhìn giá một món. Hãy xem tổng thời gian đi lại, point, coupon và việc bạn có thật sự dùng hết món đó không.",
        ],
      },
      {
        heading: "Sàn thương mại điện tử phù hợp với món nào?",
        paragraphs: [
          "Mình hay mua online với đồ nặng, đồ mua lặp lại hoặc đồ có campaign point rõ ràng. Ví dụ nước, gạo, đồ gia dụng, mỹ phẩm dùng quen.",
          "Trước khi mua, nên so giá cuối cùng sau coupon và phí ship. Có lúc nhìn giảm mạnh nhưng cộng phí lại không rẻ hơn nhiều.",
        ],
      },
      {
        heading: "Coupon và point nên dùng thế nào?",
        paragraphs: [
          "Coupon tốt nhất là coupon cho món bạn đã định mua. Nếu phải mua thêm để đủ điều kiện, hãy tính xem phần mua thêm có thật sự cần không.",
          "Point cũng vậy. Mình thích gom point ở vài nơi chính thay vì chia nhỏ quá nhiều app, vì dễ theo dõi hơn.",
        ],
      },
    ],
    checklist: [
      "Xác định nhóm đồ cần mua trong tuần.",
      "Xem app hoặc tờ rơi của siêu thị gần nhà.",
      "Kiểm tra drugstore cho đồ gia dụng và mỹ phẩm cơ bản.",
      "So giá online với món nặng hoặc mua lặp lại.",
      "Tính giá cuối sau coupon, point và phí ship.",
      "Không mua thêm chỉ để đạt điều kiện sale nếu không thật sự cần.",
    ],
    faq: [
      {
        question: "Có nên mua số lượng lớn khi sale không?",
        answer:
          "Chỉ nên mua với món chắc chắn dùng hết và có chỗ cất. Đồ rẻ nhưng để hỏng hoặc không dùng tới thì vẫn là lãng phí.",
      },
      {
        question: "Nên theo dõi bao nhiêu app sale?",
        answer:
          "Chỉ cần vài app bạn thật sự dùng. Theo dõi quá nhiều dễ mất thời gian và mua dư.",
      },
      {
        question: "Sale online có luôn rẻ hơn cửa hàng không?",
        answer:
          "Không luôn. Hãy tính cả phí ship, thời gian nhận hàng và point thực nhận.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
