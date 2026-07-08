import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import avatarAsset from "@/assets/avatar.jpg.asset.json";
import {
  FolderTree,
  Search,
  MessageSquareCode,
  Users,
  Sparkles,
  ShieldCheck,
  ArrowUp,
  ArrowRight,
  GraduationCap,
  Mail,
  Heart,
  Brain,
  Layers,
  Target,
  CheckCircle2,
  Lightbulb,
  BookOpen,
  Image as ImageIcon,
  PlayCircle,
  Cpu,
  Database,
  Palette,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

/* =========================================================
   Dữ liệu 6 dự án – tách riêng để dễ chỉnh sửa
   ========================================================= */
const projects = [
  {
    id: "du-an-1",
    tag: "Bài tập 1 · Mục 1.4",
    icon: FolderTree,
    title: "Thao tác cơ bản với tệp tin và thư mục",
    progress: 100,
    skills: ["Quản lý dữ liệu", "Công dân số", "Tổ chức thông tin"],
    objective:
      "Biết tạo thư mục, lưu trữ tài liệu khoa học, đặt tên tệp nhất quán và quản lý dữ liệu học tập trong suốt học kỳ.",
    steps: [
      "Tạo thư mục chính cho môn học “Nhập môn CNS & AI”.",
      "Chia thành các thư mục con: Bài tập, Tài liệu tham khảo, Hình ảnh minh chứng, Sản phẩm cuối kỳ.",
      "Đặt tên file theo quy tắc thống nhất: MonHoc_Chuong_BaiTap_NgayThucHien_PhienBan.",
      "Ví dụ: NMCNS_Bai01_QuanLyTep_2026-03-12_v1.pdf.",
      "Đồng bộ lên Google Drive để sao lưu và chia sẻ.",
    ],
    tools: ["File Explorer", "Google Drive", "OneDrive"],
    analysis: [
      "Cấu trúc phân cấp giúp tìm tài liệu chỉ trong vài giây, tránh thất lạc khi số lượng file tăng lên.",
      "Quy tắc đặt tên có ngày và phiên bản cho phép phân biệt bản nháp – bản chỉnh sửa – bản cuối, hạn chế nhầm lẫn khi nộp bài.",
      "Việc đồng bộ đám mây đảm bảo dữ liệu an toàn trước sự cố mất máy hoặc hư ổ cứng.",
    ],
    lesson: [
      "Quản lý dữ liệu khoa học là kỹ năng nền tảng của công dân số.",
      "Một cấu trúc thư mục tốt tiết kiệm thời gian và tăng hiệu quả học tập lâu dài.",
    ],
    evidence: "Ảnh chụp màn hình cấu trúc thư mục môn học",
  },
  {
    id: "du-an-2",
    tag: "Bài tập 2 · Mục 2.4",
    icon: Search,
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    progress: 100,
    skills: ["Tìm kiếm nâng cao", "Đánh giá nguồn", "Tư duy phản biện"],
    objective:
      "Biết sử dụng các toán tử tìm kiếm nâng cao và đánh giá độ tin cậy của nguồn thông tin học thuật.",
    steps: [
      "Chọn chủ đề: “Ứng dụng AI tạo sinh trong giáo dục đại học”.",
      "Áp dụng hơn 4 toán tử nâng cao trên Google Scholar và Google Search.",
      "Ghi lại 6 nguồn khác nhau và lập bảng đánh giá độ tin cậy.",
      "So sánh và chọn ra 3 nguồn học thuật đáng tin cậy nhất.",
    ],
    tools: ["Google Search", "Google Scholar", "Trang chủ trường đại học", "Báo cáo PDF"],
    operators: [
      { op: "site:", ex: 'site:edu.vn "trí tuệ nhân tạo"' },
      { op: "filetype:", ex: "filetype:pdf ứng dụng AI trong giáo dục" },
      { op: "intitle:", ex: 'intitle:"prompt engineering" education' },
      { op: '"..."', ex: '"generative AI in learning"' },
      { op: "OR", ex: "ChatGPT OR Gemini classroom" },
      { op: "-", ex: "AI education -marketing" },
      { op: "after:", ex: "AI ethics after:2023" },
    ],
    sources: [
      {
        name: "Báo cáo UNESCO 2023",
        author: "UNESCO",
        year: "2023",
        trust: "Cao",
        why: "Tổ chức quốc tế, có phản biện học thuật.",
        limit: "Phạm vi toàn cầu, ít số liệu Việt Nam.",
      },
      {
        name: "Bài báo trên Scholar",
        author: "Nguyễn V.A và cộng sự",
        year: "2024",
        trust: "Cao",
        why: "Có DOI, tạp chí uy tín, trích dẫn rõ.",
        limit: "Chuyên sâu, đòi hỏi nền tảng đọc học thuật.",
      },
      {
        name: "Trang web trường đại học",
        author: "ĐH Bách Khoa",
        year: "2024",
        trust: "Khá",
        why: "Nguồn chính thức của cơ sở giáo dục.",
        limit: "Chủ yếu góc nhìn của một trường.",
      },
      {
        name: "Blog công nghệ",
        author: "Không rõ tác giả",
        year: "2025",
        trust: "Thấp",
        why: "Cập nhật xu hướng nhanh.",
        limit: "Không kiểm duyệt học thuật, dễ chủ quan.",
      },
    ],
    analysis: [
      "Tìm kiếm hiệu quả không chỉ là gõ từ khóa – cần chiến lược kết hợp toán tử để thu hẹp phạm vi.",
      "Các nguồn học thuật (UNESCO, tạp chí có DOI) có giá trị hơn blog cá nhân do có quy trình phản biện.",
      "Luôn đối chiếu ít nhất 2–3 nguồn để giảm rủi ro thông tin sai lệch.",
    ],
    lesson: [
      "Cần kiểm chứng thông tin trước khi sử dụng.",
      "Không nên phụ thuộc vào một nguồn duy nhất, đặc biệt khi nguồn thiếu tác giả rõ ràng.",
    ],
    evidence: "Ảnh kết quả tìm kiếm nâng cao + bảng đánh giá nguồn",
  },
  {
    id: "du-an-3",
    tag: "Bài tập 3 · Mục 3.4",
    icon: MessageSquareCode,
    title: "Viết Prompt hiệu quả cho các tác vụ học tập",
    progress: 100,
    skills: ["Prompt Engineering", "Tư duy cấu trúc", "Kiểm soát đầu ra AI"],
    objective:
      "Biết cách viết prompt rõ ràng để AI trả lời đúng yêu cầu, có cấu trúc và phù hợp mục tiêu học tập.",
    steps: [
      "Viết prompt ban đầu còn chung chung, thiếu bối cảnh.",
      "Cải tiến prompt: thêm vai trò, bối cảnh, yêu cầu, định dạng đầu ra và tiêu chí đánh giá.",
      "Chạy cả hai prompt trên ChatGPT, so sánh chất lượng câu trả lời.",
      "Rút ra công thức prompt hiệu quả cá nhân.",
    ],
    tools: ["ChatGPT", "Gemini", "Claude"],
    promptV1:
      "Hãy tóm tắt bài học về prompt engineering giúp mình.",
    promptV2:
      "Bạn đóng vai giảng viên môn Nhập môn Công nghệ số. Hãy tóm tắt bài học về Prompt Engineering dành cho sinh viên năm nhất chưa có nền tảng kỹ thuật. Yêu cầu: (1) tối đa 200 chữ, (2) chia thành 3 mục – khái niệm, cấu trúc prompt, ví dụ áp dụng, (3) dùng ngôn ngữ dễ hiểu, kèm 1 ví dụ minh họa, (4) kết thúc bằng 1 câu hỏi phản biện cho người học.",
    compare: [
      {
        criterion: "Độ rõ ràng",
        v1: "Mơ hồ, chung chung",
        v2: "Rõ ràng, chi tiết",
        note: "V2 nêu rõ mục tiêu và giới hạn.",
      },
      {
        criterion: "Vai trò",
        v1: "Không có",
        v2: "Giảng viên môn CNS",
        note: "V2 giúp AI xác định phong cách trả lời.",
      },
      {
        criterion: "Bối cảnh",
        v1: "Không nêu",
        v2: "Sinh viên năm nhất, chưa có nền tảng",
        note: "V2 dẫn tới ngôn ngữ dễ hiểu hơn.",
      },
      {
        criterion: "Định dạng đầu ra",
        v1: "Tự do",
        v2: "3 mục, tối đa 200 chữ",
        note: "V2 dễ trình bày và chấm điểm.",
      },
      {
        criterion: "Mức độ chính xác",
        v1: "Trung bình",
        v2: "Cao",
        note: "V2 ít bị lan man khỏi chủ đề.",
      },
      {
        criterion: "Khả năng kiểm soát",
        v1: "Thấp",
        v2: "Cao",
        note: "V2 dễ điều chỉnh lại theo mong muốn.",
      },
    ],
    analysis: [
      "Prompt cải tiến giúp AI hiểu rõ vai trò, bối cảnh, mục tiêu và định dạng nên kết quả có cấu trúc hơn.",
      "AI phản hồi dựa trên ngữ cảnh và độ cụ thể của yêu cầu – prompt càng cụ thể, đầu ra càng chính xác.",
      "Kỹ thuật Prompt Engineering biến AI thành công cụ hỗ trợ tư duy, không phải công cụ làm thay.",
    ],
    lesson: [
      "Muốn AI trả lời tốt cần đặt câu hỏi tốt.",
      "Prompt hiệu quả phải rõ vai trò – bối cảnh – nhiệm vụ – định dạng – tiêu chí.",
    ],
    evidence: "Ảnh chụp prompt v1, v2 và câu trả lời AI tương ứng",
  },
  {
    id: "du-an-4",
    tag: "Bài tập 4 · Mục 4.4",
    icon: Users,
    title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    progress: 100,
    skills: ["Làm việc nhóm", "Quản lý dự án", "Giao tiếp số"],
    objective:
      "Biết lập kế hoạch, phân công nhiệm vụ và theo dõi tiến độ nhóm bằng công cụ trực tuyến.",
    steps: [
      "Tạo bảng công việc trên Trello/Notion cho dự án nhóm giả định “Xây dựng bài trình bày AI trong giáo dục”.",
      "Chia nhóm thành 4 thành viên với các vai trò riêng.",
      "Đặt deadline cụ thể cho mỗi nhiệm vụ.",
      "Theo dõi trạng thái: Chưa làm · Đang làm · Hoàn thành · Cần chỉnh sửa.",
      "Họp online 2 lần/tuần để đồng bộ tiến độ.",
    ],
    tools: ["Trello", "Notion", "Google Sheets", "Microsoft Planner"],
    team: [
      { m: "Thành viên A", task: "Nghiên cứu tài liệu", due: "12/03", status: "Hoàn thành", note: "Đã tổng hợp 6 nguồn." },
      { m: "Thành viên B", task: "Viết nội dung slide", due: "15/03", status: "Đang làm", note: "Cần bổ sung ví dụ." },
      { m: "Thành viên C", task: "Thiết kế đồ họa", due: "18/03", status: "Chưa làm", note: "Chờ nội dung từ B." },
      { m: "Thành viên D (mình)", task: "Điều phối & kiểm tra chất lượng", due: "20/03", status: "Đang làm", note: "Tổng hợp phản hồi." },
    ],
    analysis: [
      "Công cụ trực tuyến giúp nhóm làm việc minh bạch và dễ theo dõi tiến độ.",
      "Mỗi thành viên biết rõ nhiệm vụ, tránh trùng lặp hoặc bỏ sót công việc.",
      "Theo dõi trạng thái giúp phát hiện điểm nghẽn sớm để điều chỉnh kịp thời (ví dụ B chậm sẽ ảnh hưởng C).",
      "Việc chuẩn hóa quy trình – phân công – nhắc hạn – phản hồi giúp nhóm hoàn thành đúng tiến độ.",
    ],
    lesson: [
      "Làm việc nhóm hiệu quả cần có kế hoạch rõ ràng và công cụ hỗ trợ theo dõi.",
      "Công cụ số nâng cao tính trách nhiệm cá nhân và khả năng phối hợp tập thể.",
    ],
    evidence: "Ảnh bảng công việc trên Trello/Notion",
  },
  {
    id: "du-an-5",
    tag: "Bài tập 5 · Mục 5.4",
    icon: Sparkles,
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    progress: 100,
    skills: ["AI tạo sinh", "Sản xuất nội dung số", "Biên tập"],
    objective:
      "Biết sử dụng AI để tạo sản phẩm nội dung số (video, infographic, ảnh minh họa) phục vụ học tập.",
    steps: [
      "Chọn khái niệm: “Prompt Engineering là gì?”.",
      "Lên ý tưởng và viết kịch bản với ChatGPT.",
      "Sinh hình ảnh minh họa bằng DALL·E / Gemini.",
      "Tạo giọng đọc AI, dựng video ngắn (<5 phút) bằng CapCut/Canva.",
      "Chỉnh sửa thủ công: cắt cảnh, kiểm tra ngôn ngữ, thêm chú thích cá nhân.",
      "Rà soát chất lượng lần cuối và xuất bản.",
    ],
    tools: ["ChatGPT", "Gemini", "DALL·E", "Canva", "CapCut"],
    roles: [
      { step: "Lên ý tưởng", human: "Chọn chủ đề, xác định đối tượng", ai: "Gợi ý outline" },
      { step: "Viết kịch bản", human: "Định hướng thông điệp, kiểm duyệt", ai: "Tạo bản nháp" },
      { step: "Tạo hình ảnh", human: "Chọn phong cách, tinh chỉnh prompt", ai: "Sinh ảnh minh họa" },
      { step: "Dựng video", human: "Cắt ghép, đồng bộ nhạc, chú thích", ai: "Tạo giọng đọc" },
      { step: "Kiểm tra chất lượng", human: "Đọc lại, sửa lỗi, cá nhân hóa", ai: "Gợi ý cải tiến" },
    ],
    analysis: [
      "AI giúp rút ngắn thời gian sản xuất từ nhiều giờ xuống còn 30–60 phút.",
      "Tuy nhiên, người học vẫn cần kiểm duyệt để đảm bảo tính chính xác và tránh nội dung “ảo”.",
      "Sản phẩm tốt là sự kết hợp giữa năng lực con người (định hướng, biên tập) và công cụ AI (tăng tốc, mở rộng ý tưởng).",
    ],
    lesson: [
      "AI là công cụ hỗ trợ sáng tạo, không thay thế hoàn toàn tư duy cá nhân.",
      "Cần biết chọn lọc, biên tập và chịu trách nhiệm với nội dung do mình phát hành.",
    ],
    evidence: "Video sản phẩm hoặc ảnh khung hình đại diện",
  },
  {
    id: "du-an-6",
    tag: "Bài tập 6 · Mục 6.4",
    icon: ShieldCheck,
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    progress: 100,
    skills: ["Đạo đức AI", "Tư duy phản biện", "Trách nhiệm số"],
    objective:
      "Hiểu các vấn đề đạo đức khi sử dụng AI và xây dựng bộ nguyên tắc cá nhân để sử dụng AI có trách nhiệm.",
    steps: [
      "Nghiên cứu chính sách sử dụng AI của các trường đại học và quy định học thuật.",
      "Phân tích các rủi ro đạo đức khi dùng AI trong học tập.",
      "Xây dựng bộ 7 nguyên tắc cá nhân.",
      "Áp dụng bộ nguyên tắc vào việc thực hiện Portfolio này.",
    ],
    tools: ["Tài liệu học thuật", "Quy định nhà trường", "Nguồn tham khảo chính thống"],
    issues: [
      { name: "Đạo văn & gian lận học thuật", fix: "Ghi chú rõ khi có sử dụng AI, viết lại bằng ngôn ngữ cá nhân." },
      { name: "Sai lệch thông tin (AI hallucination)", fix: "Kiểm chứng thông tin bằng nhiều nguồn học thuật uy tín." },
      { name: "Thiên kiến thuật toán", fix: "Nhận diện quan điểm phiến diện và bổ sung góc nhìn đa chiều." },
      { name: "Quyền riêng tư dữ liệu", fix: "Không nhập thông tin cá nhân, mật khẩu hay dữ liệu nhạy cảm vào AI." },
      { name: "Phụ thuộc AI", fix: "Chỉ dùng AI như trợ lý; giữ vai trò tư duy và ra quyết định cho bản thân." },
    ],
    principles: [
      "Không dùng AI để gian lận hoặc làm thay toàn bộ bài tập.",
      "Luôn kiểm chứng thông tin do AI cung cấp bằng nguồn học thuật.",
      "Ghi rõ khi có sử dụng AI trong quá trình học tập.",
      "Không nhập dữ liệu cá nhân hoặc thông tin nhạy cảm vào AI.",
      "Không sao chép nguyên văn nội dung AI nếu chưa kiểm tra và chỉnh sửa.",
      "Sử dụng AI để hỗ trợ tư duy, không thay thế tư duy.",
      "Chịu trách nhiệm cuối cùng với sản phẩm học tập của bản thân.",
    ],
    analysis: [
      "AI mở ra cơ hội học tập mới nhưng cũng đặt ra rủi ro về liêm chính học thuật.",
      "Người học cần phát triển năng lực tự đánh giá, phản biện và kiểm chứng.",
      "Sử dụng AI có trách nhiệm giúp bảo vệ tính trung thực, sáng tạo và chất lượng học tập.",
    ],
    lesson: [
      "Trách nhiệm số là kỹ năng quan trọng trong thời đại AI.",
      "Sử dụng AI đúng cách giúp người học phát triển bền vững hơn.",
    ],
    evidence: "Ảnh bộ nguyên tắc cá nhân + trích dẫn quy định nhà trường",
  },
];

/* ================= Placeholder minh chứng ================= */
const evidence = [
  { title: "Cấu trúc thư mục môn học", desc: "Ảnh chụp hệ thống thư mục và quy tắc đặt tên file.", icon: FolderTree, tone: "pink" },
  { title: "Kết quả tìm kiếm học thuật", desc: "Ảnh kết quả áp dụng toán tử site:, filetype:, intitle:…", icon: Search, tone: "blue" },
  { title: "So sánh Prompt v1 và v2", desc: "Ảnh chụp prompt ban đầu, prompt cải tiến và phản hồi AI.", icon: MessageSquareCode, tone: "pink" },
  { title: "Bảng quản lý công việc nhóm", desc: "Ảnh chụp Trello/Notion phân công và tiến độ nhóm.", icon: Users, tone: "blue" },
  { title: "Sản phẩm AI tạo sinh", desc: "Video ngắn / infographic được sản xuất với hỗ trợ của AI.", icon: PlayCircle, tone: "pink" },
  { title: "Bộ nguyên tắc sử dụng AI", desc: "7 nguyên tắc cá nhân về sử dụng AI có trách nhiệm.", icon: ShieldCheck, tone: "blue" },
];

/* ================= Bảng tổng hợp kỹ năng ================= */
const skillsSummary = [
  { name: "Quản lý tệp và dữ liệu số", level: 92, desc: "Tổ chức thư mục, đặt tên file, đồng bộ đám mây.", use: "Học tập, nghiên cứu, làm việc dài hạn." },
  { name: "Tìm kiếm thông tin học thuật", level: 90, desc: "Sử dụng thành thạo hơn 4 toán tử nâng cao.", use: "Viết báo cáo, tiểu luận, nghiên cứu." },
  { name: "Đánh giá độ tin cậy nguồn", level: 88, desc: "Phân biệt nguồn học thuật – blog – tin không rõ nguồn.", use: "Trích dẫn học thuật, kiểm chứng tin tức." },
  { name: "Viết Prompt hiệu quả", level: 90, desc: "Cấu trúc prompt theo vai trò – bối cảnh – yêu cầu – định dạng.", use: "Hỗ trợ học, viết, phân tích, sáng tạo nội dung." },
  { name: "Làm việc nhóm trực tuyến", level: 85, desc: "Điều phối nhiệm vụ, theo dõi tiến độ trên Trello/Notion.", use: "Dự án nhóm, làm việc từ xa." },
  { name: "Sáng tạo nội dung số bằng AI", level: 87, desc: "Kết hợp AI và biên tập cá nhân để tạo sản phẩm số.", use: "Video học tập, infographic, slide thuyết trình." },
  { name: "Sử dụng AI có trách nhiệm", level: 93, desc: "Áp dụng bộ 7 nguyên tắc cá nhân trong mọi tác vụ.", use: "Học tập, nghiên cứu, công việc tương lai." },
  { name: "Tự đánh giá và cải thiện bản thân", level: 88, desc: "Phản chiếu quá trình học và điều chỉnh phương pháp.", use: "Phát triển năng lực học tập suốt đời." },
];

/* ============================ COMPONENT ============================ */
function Index() {
  const [showTop, setShowTop] = useState(false);

  // Reveal on scroll + back-to-top
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const onScroll = () => setShowTop(window.scrollY > 480);
    window.addEventListener("scroll", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Overview />
      <Projects />
      <EvidenceGallery />
      <SkillsSection />
      <Conclusion />
      <Footer />

      {/* Back to top */}
      <button
        aria-label="Quay lại đầu trang"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 ${
          showTop ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}

/* ============================ NAV ============================ */
const navItems = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#tong-quan", label: "Tổng quan" },
  { href: "#du-an", label: "Dự án" },
  { href: "#minh-chung", label: "Minh chứng" },
  { href: "#ky-nang", label: "Kỹ năng" },
  { href: "#tong-ket", label: "Tổng kết" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:flex sm:justify-between">
        <a href="#hero" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="truncate font-semibold tracking-tight">Portfolio · CNS & AI</span>
        </a>
        <nav className="hidden gap-1 md:flex">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button
          className="rounded-lg border border-border px-3 py-1.5 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở menu"
        >
          Menu
        </button>
      </div>
      {open && (
        <nav className="grid gap-1 border-t border-border bg-background/95 px-5 py-3 md:hidden">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

/* ============================ HERO ============================ */
function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-dots opacity-60" />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)", opacity: 0.7 }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:py-28 md:grid-cols-[1.15fr_1fr] md:items-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-primary-foreground shadow-sm backdrop-blur">
            <Heart className="h-3.5 w-3.5" /> Bài tập dự án cá nhân · Học kỳ II 2026
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl">
            <span className="text-gradient">Portfolio Kỹ thuật số</span>
            <br />
            <span>cá nhân</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Hành trình học tập môn <b>Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</b> – nơi
            lưu trữ, trình bày và đánh giá quá trình học tập thông qua sáu sản phẩm số đã hoàn thành.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#gioi-thieu"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Giới thiệu <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#du-an"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition-transform hover:-translate-y-0.5"
            >
              Dự án học tập
            </a>
            <a
              href="#minh-chung"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition-transform hover:-translate-y-0.5"
            >
              Minh chứng
            </a>
            <a
              href="#tong-ket"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition-transform hover:-translate-y-0.5"
            >
              Tổng kết
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {[
              { k: "6", v: "Dự án" },
              { k: "8+", v: "Kỹ năng số" },
              { k: "7", v: "Nguyên tắc AI" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-border bg-white/70 p-4 text-center backdrop-blur"
              >
                <div className="text-2xl font-semibold text-foreground">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero illustration */}
        <div className="reveal relative">
          <div
            className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-6 backdrop-blur"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div
              className="absolute inset-0 -z-10"
              style={{ background: "var(--gradient-primary)", opacity: 0.5 }}
            />
            <div className="grid h-full grid-cols-2 grid-rows-2 gap-4">
              {[
                { icon: Brain, label: "AI", tone: "from-primary/80 to-primary/40" },
                { icon: Database, label: "Dữ liệu", tone: "from-secondary/80 to-secondary/30" },
                { icon: BookOpen, label: "Học tập", tone: "from-accent/80 to-accent/30" },
                { icon: Palette, label: "Sáng tạo", tone: "from-primary/70 to-secondary/40" },
              ].map(({ icon: Icon, label, tone }) => (
                <div
                  key={label}
                  className={`grid place-items-center rounded-2xl bg-gradient-to-br ${tone} text-primary-foreground shadow-inner`}
                >
                  <div className="text-center">
                    <Icon className="mx-auto h-8 w-8" />
                    <div className="mt-2 text-xs font-medium">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ ABOUT ============================ */
function About() {
  return (
    <section id="gioi-thieu" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeader
        eyebrow="Giới thiệu"
        title="About Me"
        desc={`Chào mừng bạn đến với portfolio của tôi - nơi tôi chia sẻ hành trình học tập và\u00a0\nphát triển kỹ năng số`}
      />
      <div className="grid gap-6 md:grid-cols-[1fr_1.4fr]">
        {/* Card avatar */}
        <div
          className="reveal card-hover rounded-3xl border border-border bg-card p-6"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white/60 shadow-md">
            <img
              src={avatarAsset.url}
              alt="Ảnh đại diện Nguyễn Bảo Thy"
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="mt-5 text-center text-xl font-semibold">Nguyễn Bảo Thy</h3>
          <p className="text-center text-sm text-muted-foreground">Sinh viên · Công nghệ số & AI</p>

          <ul className="mt-6 grid gap-2 text-sm">
            <InfoRow icon={GraduationCap} label="Ngành học" value="Kinh Tế Quốc Tế" />
            <InfoRow icon={BookOpen} label="Trường" value="[Điền trường]" />
            <InfoRow icon={BookOpen} label="Lớp" value="[Điền lớp]" />
            <InfoRow icon={Mail} label="Liên hệ" value="25051068@vnu.edu.vn " />
          </ul>
        </div>

        {/* Content */}
        <div className="reveal grid gap-4">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Heart className="h-4 w-4 text-primary" /> Sở thích cá nhân
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Học công nghệ số",
                "Khám phá AI",
                "Sáng tạo nội dung",
                "Quản lý dữ liệu",
                "Làm việc nhóm",
                "Đọc sách",
                "\n",
                "Khám phá cách tìm kiếm và chọn lọc thông tin học thuật trên Internet",
              ].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Target className="h-4 w-4 text-primary" /> Mục tiêu học tập
            </h3>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              {[
                "Phát triển kỹ năng số để thích ứng với thời đại công nghệ 4.0 và nhu cầu của thị trường lao động.",
                "Chủ động tiếp cận và ứng dụng AI như ChatGPT để hỗ trợ học tập và nghiên cứu một cách có trách nhiệm.",
                "Rèn luyện tư duy phản biện, khả năng đánh giá thông tin và giải quyết vấn đề sáng tạo.",
                "Xây dựng thói quen học tập suốt đời và cập nhật kiến thức công nghệ liên tục.",
                "Đạt điểm Xuất sắc (8.1-10) trong môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Target className="h-4 w-4 text-primary" /> Mục tiêu Portfolio
            </h3>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              {[
                "Tổng hợp quá trình học tập: Ghi lại toàn bộ hành trình học tập qua các bài tập và dự án của môn học.",
                "Lưu trữ sản phẩm học tập: Xây dựng kho lưu trữ các minh chứng và sản phẩm đã hoàn thành.",
                "Thể hiện sự tiến bộ: Minh họa rõ ràng sự phát triển và tiến bộ qua từng bài học.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 text-center">
            <p className="mx-auto max-w-xl text-sm font-medium italic text-foreground">
              "Học không chỉ để biết, mà học để làm được. Công nghệ là công cụ, nhưng tư duy mới là chìa khóa."
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { icon: Cpu, label: "Kỹ năng số" },
              { icon: Brain, label: "Tư duy AI" },
              { icon: Layers, label: "Tổ chức thông tin" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-center gap-3 rounded-xl bg-muted/50 px-3 py-2">
      <Icon className="h-4 w-4 text-primary" />
      <span className="text-xs uppercase tracking-wide text-muted-foreground">{label}</span>
      <span className="ml-auto text-sm font-medium">{value}</span>
    </li>
  );
}

/* ============================ OVERVIEW / TIMELINE ============================ */
function Overview() {
  return (
    <section id="tong-quan" className="relative">
      <div className="absolute inset-0 -z-10 bg-dots opacity-30" />
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeader
          eyebrow="Tổng quan dự án"
          title="Hành trình 6 nhiệm vụ học tập"
          desc="Sáu bài tập tính điểm cuối kỳ được kết nối thành một hành trình phát triển năng lực số và AI có trách nhiệm."
        />
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2 md:block" />

          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`reveal relative mb-10 grid gap-6 md:grid-cols-2 md:items-center ${
                i % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-6 top-6 z-10 grid h-8 w-8 place-items-center rounded-full border-4 border-background text-xs font-semibold text-primary-foreground md:left-1/2 md:-translate-x-1/2 ${
                  i % 2 === 0 ? "bg-primary" : "bg-secondary"
                }`}
              >
                {i + 1}
              </div>

              {/* Content card */}
              <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                <a
                  href={`#${p.id}`}
                  className="card-hover group relative block rounded-3xl border border-border bg-card p-5"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-primary-foreground"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <p.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-muted-foreground">
                        {i === 0 && "Bài 1 - Bài tập 1 của mục 1.4: Thao tác cơ bản với tệp tin và thư mục"}
                        {i === 1 && "Bài 2 - Bai tap 2 cua mục 2.4: Tìm kiem va đanh gia thong tin học thuật"}
                        {i === 2 && "Bài 3 - Bai tap 2 cua mục 3.4: Viet Prompt hieu qua cho cac tac vu hoc tap"}
                        {i === 3 && "Bài 4 - Bài tập 3 của mục 4.4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm"}
                        {i === 4 && "Bài 5 - Bài tập 2 của mục 5.4: Sử dụng Al tạo sinh để hỗ trợ sáng tạo nội dung"}
                        {i === 5 && "Bài 6 - Bài tập 4 của mục 6.4: Sử dụng Al có trách nhiệm trong học tập và nghiên cứu"}
                      </div>
                      
                    </div>
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{p.objective}</p>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Tiến độ hoàn thành</span>
                    <span className="font-medium">{p.progress}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${p.progress}%`,
                        background: "var(--gradient-primary)",
                      }}
                    />
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-foreground/80 transition-all group-hover:gap-2">
                    <span className="text-foreground">Xem chi tiết</span>
                    <ArrowRight className="h-4 w-4 text-foreground" />
                  </div>
                </a>
              </div>

              {/* Empty space for the other side */}
              <div
                className={`hidden md:block ${i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ PROJECTS ============================ */
function Projects() {
  return (
    <section id="du-an" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeader
        eyebrow="Dự án học tập"
        title="Sáu bài tập – sáu sản phẩm số"
        desc="Mỗi dự án được trình bày với cấu trúc thống nhất: mục tiêu, quá trình thực hiện, công cụ, minh chứng, phân tích và bài học rút ra."
      />
      <div className="grid gap-10">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p, index }: { p: (typeof projects)[number]; index: number }) {
  return (
    <article
      id={p.id}
      className="reveal scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-card"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      {/* Header */}
      <div
        className="grid gap-4 border-b border-border px-6 py-6 sm:grid-cols-[auto_1fr_auto] sm:items-center"
        style={{ background: "var(--gradient-hero)" }}
      >
        <span
          className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-primary-foreground"
          style={{ background: "var(--gradient-primary)" }}
        >
          <p.icon className="h-6 w-6" />
        </span>
        <div className="min-w-0">
          <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Dự án {index + 1} · {p.tag}
          </div>
          <h3 className="text-xl font-semibold sm:text-2xl">{p.title}</h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {p.skills.map((s) => (
              <span
                key={s}
                className="rounded-full bg-white/70 px-2.5 py-0.5 text-xs font-medium text-foreground/80 backdrop-blur"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="min-w-[160px]">
          <div className="text-xs text-muted-foreground">Tiến độ</div>
          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/70">
            <div
              className="h-full rounded-full"
              style={{ width: `${p.progress}%`, background: "var(--gradient-primary)" }}
            />
          </div>
          <div className="mt-1 text-right text-xs font-medium">{p.progress}%</div>
        </div>
      </div>

      {/* Body */}
      <div className="grid gap-6 p-6 md:grid-cols-2">
        <Block icon={Target} title="Mục tiêu">
          <p>{p.objective}</p>
        </Block>

        <Block icon={Cpu} title="Công cụ sử dụng">
          <div className="flex flex-wrap gap-2">
            {p.tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </Block>

        <Block icon={Layers} title="Quá trình thực hiện" wide>
          <ol className="grid gap-2">
            {p.steps.map((s, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-xs font-semibold text-foreground">
                  {idx + 1}
                </span>
                <span className="text-sm text-muted-foreground">{s}</span>
              </li>
            ))}
          </ol>
        </Block>

        {/* Dự án 2: toán tử + bảng đánh giá nguồn */}
        {p.operators && (
          <Block icon={Search} title="Toán tử tìm kiếm nâng cao đã sử dụng" wide>
            <div className="grid gap-2 sm:grid-cols-2">
              {p.operators.map((o) => (
                <div
                  key={o.op}
                  className="rounded-xl border border-border bg-muted/40 p-3 text-sm"
                >
                  <code className="font-mono text-primary-foreground/90 text-foreground">
                    {o.op}
                  </code>
                  <div className="mt-1 text-xs text-muted-foreground">{o.ex}</div>
                </div>
              ))}
            </div>
          </Block>
        )}

        {p.sources && (
          <Block icon={BookOpen} title="Bảng đánh giá nguồn thông tin" wide>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-muted/60 text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="p-2">Nguồn</th>
                    <th className="p-2">Tác giả/Tổ chức</th>
                    <th className="p-2">Năm</th>
                    <th className="p-2">Tin cậy</th>
                    <th className="p-2">Lý do chọn</th>
                    <th className="p-2">Hạn chế</th>
                  </tr>
                </thead>
                <tbody>
                  {p.sources.map((s) => (
                    <tr key={s.name} className="border-t border-border align-top">
                      <td className="p-2 font-medium">{s.name}</td>
                      <td className="p-2 text-muted-foreground">{s.author}</td>
                      <td className="p-2 text-muted-foreground">{s.year}</td>
                      <td className="p-2">
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                            s.trust === "Cao"
                              ? "bg-secondary text-secondary-foreground"
                              : s.trust === "Khá"
                                ? "bg-accent text-accent-foreground"
                                : "bg-primary/30 text-foreground"
                          }`}
                        >
                          {s.trust}
                        </span>
                      </td>
                      <td className="p-2 text-muted-foreground">{s.why}</td>
                      <td className="p-2 text-muted-foreground">{s.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Block>
        )}

        {/* Dự án 3: prompt v1 v2 + so sánh */}
        {p.promptV1 && (
          <Block icon={MessageSquareCode} title="Prompt v1 (ban đầu)">
            <div className="rounded-xl border border-border bg-muted/50 p-3 text-sm text-muted-foreground">
              “{p.promptV1}”
            </div>
          </Block>
        )}
        {p.promptV2 && (
          <Block icon={MessageSquareCode} title="Prompt v2 (cải tiến)">
            <div
              className="rounded-xl border border-primary/30 bg-primary/10 p-3 text-sm text-foreground"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              “{p.promptV2}”
            </div>
          </Block>
        )}
        {p.compare && (
          <Block icon={Layers} title="Bảng so sánh Prompt v1 và v2" wide>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-muted/60 text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="p-2">Tiêu chí</th>
                    <th className="p-2">Prompt ban đầu</th>
                    <th className="p-2">Prompt cải tiến</th>
                    <th className="p-2">Nhận xét</th>
                  </tr>
                </thead>
                <tbody>
                  {p.compare.map((c) => (
                    <tr key={c.criterion} className="border-t border-border align-top">
                      <td className="p-2 font-medium">{c.criterion}</td>
                      <td className="p-2 text-muted-foreground">{c.v1}</td>
                      <td className="p-2 text-foreground">{c.v2}</td>
                      <td className="p-2 text-muted-foreground">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Block>
        )}

        {/* Dự án 4: bảng phân công */}
        {p.team && (
          <Block icon={Users} title="Bảng phân công & theo dõi tiến độ nhóm" wide>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-muted/60 text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="p-2">Thành viên</th>
                    <th className="p-2">Nhiệm vụ</th>
                    <th className="p-2">Hạn</th>
                    <th className="p-2">Trạng thái</th>
                    <th className="p-2">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  {p.team.map((t) => (
                    <tr key={t.m} className="border-t border-border align-top">
                      <td className="p-2 font-medium">{t.m}</td>
                      <td className="p-2 text-muted-foreground">{t.task}</td>
                      <td className="p-2 text-muted-foreground">{t.due}</td>
                      <td className="p-2">
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                            t.status === "Hoàn thành"
                              ? "bg-secondary text-secondary-foreground"
                              : t.status === "Đang làm"
                                ? "bg-accent text-accent-foreground"
                                : "bg-primary/30 text-foreground"
                          }`}
                        >
                          {t.status}
                        </span>
                      </td>
                      <td className="p-2 text-muted-foreground">{t.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Block>
        )}

        {/* Dự án 5: vai trò AI vs con người */}
        {p.roles && (
          <Block icon={Sparkles} title="Vai trò của con người và AI trong quy trình" wide>
            <div className="grid gap-3 sm:grid-cols-2">
              {p.roles.map((r) => (
                <div key={r.step} className="rounded-2xl border border-border bg-muted/40 p-4">
                  <div className="text-sm font-semibold">{r.step}</div>
                  <div className="mt-2 grid gap-1 text-xs">
                    <div>
                      <span className="font-medium text-foreground">Con người: </span>
                      <span className="text-muted-foreground">{r.human}</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">AI hỗ trợ: </span>
                      <span className="text-muted-foreground">{r.ai}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Block>
        )}

        {/* Dự án 6: vấn đề đạo đức + nguyên tắc */}
        {p.issues && (
          <Block icon={ShieldCheck} title="Vấn đề đạo đức AI & giải pháp" wide>
            <ul className="grid gap-2">
              {p.issues.map((i) => (
                <li
                  key={i.name}
                  className="rounded-xl border border-border bg-muted/40 p-3 text-sm"
                >
                  <div className="font-semibold text-foreground">{i.name}</div>
                  <div className="mt-1 text-muted-foreground">Giải pháp: {i.fix}</div>
                </li>
              ))}
            </ul>
          </Block>
        )}
        {p.principles && (
          <Block icon={ShieldCheck} title="Bộ nguyên tắc cá nhân (7 điều)" wide>
            <ol className="grid gap-2 sm:grid-cols-2">
              {p.principles.map((pr, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {idx + 1}
                  </span>
                  <span className="text-foreground">{pr}</span>
                </li>
              ))}
            </ol>
          </Block>
        )}

        <Block icon={Brain} title="Phân tích kết quả" wide>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            {p.analysis.map((a, idx) => (
              <li key={idx} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary-foreground" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block icon={Lightbulb} title="Bài học rút ra">
          <ul className="grid gap-2 text-sm text-muted-foreground">
            {p.lesson.map((l, idx) => (
              <li key={idx} className="flex gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block icon={ImageIcon} title="Minh chứng">
          <EvidencePlaceholder text={p.evidence} />
        </Block>
      </div>
    </article>
  );
}

function Block({
  icon: Icon,
  title,
  wide,
  children,
}: {
  icon: typeof Target;
  title: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-background/60 p-4 ${wide ? "md:col-span-2" : ""}`}
    >
      <h4 className="flex items-center gap-2 text-sm font-semibold">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary/20 text-foreground">
          <Icon className="h-3.5 w-3.5" />
        </span>
        {title}
      </h4>
      <div className="mt-3 text-sm text-muted-foreground [&_p]:text-sm">{children}</div>
    </div>
  );
}

function EvidencePlaceholder({ text }: { text: string }) {
  return (
    <div
      className="grid h-40 place-items-center rounded-2xl border border-dashed border-primary/40 text-center text-xs text-muted-foreground"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div>
        <ImageIcon className="mx-auto h-6 w-6 text-primary-foreground/70" />
        <div className="mt-2 font-medium text-foreground">Thay bằng minh chứng thật</div>
        <div className="mt-1 max-w-xs px-4 text-muted-foreground">{text}</div>
      </div>
    </div>
  );
}

/* ============================ EVIDENCE GALLERY ============================ */
function EvidenceGallery() {
  return (
    <section id="minh-chung" className="relative">
      <div className="absolute inset-0 -z-10 bg-dots opacity-30" />
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeader
          eyebrow="Minh chứng"
          title="Evidence Gallery"
          desc="Thư viện minh chứng trực quan cho toàn bộ quá trình học tập. Có thể thay các ảnh placeholder bằng minh chứng thật."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {evidence.map((e) => (
            <div
              key={e.title}
              className="reveal card-hover overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div
                className="grid aspect-video place-items-center"
                style={{
                  background:
                    e.tone === "pink"
                      ? "linear-gradient(135deg, oklch(0.94 0.06 340), oklch(0.92 0.08 320))"
                      : "linear-gradient(135deg, oklch(0.93 0.07 220), oklch(0.94 0.06 200))",
                }}
              >
                <e.icon className="h-10 w-10 text-foreground/70" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold">{e.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.desc}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:gap-2 transition-all">
                  Xem chi tiết <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ SKILLS ============================ */
function SkillsSection() {
  return (
    <section id="ky-nang" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeader
        eyebrow="Kỹ năng đạt được"
        title="Bảng tổng hợp năng lực"
        desc="Tám nhóm kỹ năng số và AI được rèn luyện qua sáu dự án, kèm mô tả và ứng dụng thực tế."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {skillsSummary.map((s) => (
          <div
            key={s.name}
            className="reveal card-hover rounded-2xl border border-border bg-card p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold">{s.name}</h3>
              <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                {s.level}%
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full"
                style={{ width: `${s.level}%`, background: "var(--gradient-primary)" }}
              />
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Ứng dụng: </span>
              {s.use}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================ CONCLUSION ============================ */
function Conclusion() {
  return (
    <section id="tong-ket" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)", opacity: 0.6 }}
      />
      <div className="mx-auto max-w-5xl px-5 py-20">
        <SectionHeader
          eyebrow="Tổng kết"
          title="Nhìn lại hành trình & định hướng tương lai"
          desc="Tự đánh giá cá nhân sau khi hoàn thành Portfolio và những kỹ năng sẽ tiếp tục phát triển."
        />

        <div className="reveal rounded-3xl border border-border bg-card p-6 sm:p-8">
          <p className="text-base leading-relaxed text-foreground sm:text-lg">
            “Thông qua quá trình xây dựng Portfolio kỹ thuật số cá nhân, em không chỉ lưu trữ các
            sản phẩm học tập mà còn nhìn lại toàn bộ quá trình rèn luyện kỹ năng công nghệ số,
            tư duy phản biện và khả năng sử dụng AI có trách nhiệm. Portfolio giúp em hiểu rằng
            trong môi trường học tập hiện đại, công nghệ không chỉ là công cụ hỗ trợ mà còn là
            phương tiện để người học thể hiện năng lực, sự sáng tạo và thái độ học tập nghiêm túc.
            Những kỹ năng như quản lý dữ liệu, tìm kiếm học thuật, viết prompt, làm việc nhóm
            trực tuyến và đánh giá đạo đức AI sẽ tiếp tục có giá trị trong học tập, nghiên cứu và
            công việc tương lai.”
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="reveal rounded-3xl border border-border bg-card p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Lightbulb className="h-5 w-5 text-primary" /> Điểm tâm đắc
            </h3>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              {[
                "Hiểu sâu hơn về vai trò của công nghệ số trong học tập hiện đại.",
                "Biết đặt câu hỏi tốt với AI để nhận được kết quả có giá trị.",
                "Phát triển thói quen kiểm chứng và trích dẫn thông tin học thuật.",
                "Ý thức rõ trách nhiệm cá nhân khi sử dụng AI.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-3xl border border-border bg-card p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Target className="h-5 w-5 text-primary" /> Khó khăn & cách khắc phục
            </h3>
            <ul className="mt-3 grid gap-3 text-sm">
              {[
                {
                  k: "Khó sắp xếp nội dung sao cho khoa học",
                  v: "Lập dàn ý và cấu trúc thư mục trước khi bắt tay vào viết.",
                },
                {
                  k: "Khó đánh giá độ tin cậy của thông tin",
                  v: "Đối chiếu nhiều nguồn, ưu tiên tài liệu có DOI, tổ chức uy tín.",
                },
                {
                  k: "Khó viết prompt đủ rõ ràng",
                  v: "So sánh nhiều phiên bản prompt để tìm công thức phù hợp.",
                },
                {
                  k: "Khó cân bằng giữa dùng AI và tư duy cá nhân",
                  v: "Áp dụng bộ nguyên tắc: AI hỗ trợ – con người quyết định.",
                },
              ].map((c) => (
                <li key={c.k} className="rounded-xl border border-border bg-muted/40 p-3">
                  <div className="font-medium text-foreground">{c.k}</div>
                  <div className="mt-1 text-muted-foreground">→ {c.v}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-3xl border border-border bg-card p-6 md:col-span-2">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <ArrowRight className="h-5 w-5 text-primary" /> Định hướng áp dụng trong tương lai
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {[
                "Tiếp tục sử dụng Portfolio để lưu trữ sản phẩm học tập lâu dài.",
                "Ứng dụng kỹ năng số vào nghiên cứu, thực tập và công việc.",
                "Xem AI là công cụ hỗ trợ học tập có trách nhiệm, không thay thế tư duy.",
              ].map((t) => (
                <div key={t} className="rounded-2xl bg-muted/40 p-4 text-sm text-foreground">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ FOOTER ============================ */
function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-semibold">Portfolio · CNS & AI</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Portfolio được xây dựng nhằm phục vụ mục đích học tập và tự đánh giá năng lực số.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Sinh viên
          </div>
          <div className="mt-2 text-sm">Nguyễn Bảo Thy</div>
          <div className="text-sm text-muted-foreground whitespace-pre-line">
            Khoa: Kinh Tế Quốc Tế{"\n"}Lớp: KTQT 6
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Môn học
          </div>
          <div className="mt-2 text-sm">Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</div>
          <div className="text-sm text-muted-foreground">Năm học 2025 – 2026</div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Liên hệ
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-primary" /> 25051068@vnu.edu.vn
          </div>
          <div className="mt-1 text-sm text-muted-foreground">Có thể thay bằng email thật.</div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Portfolio Kỹ thuật số cá nhân · Được xây dựng với tinh thần
          học tập nghiêm túc.
        </div>
      </div>
    </footer>
  );
}

/* ============================ HEADER HELPER ============================ */
function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="reveal mx-auto mb-10 max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      <p className="mt-3 text-sm text-muted-foreground sm:text-base">{desc}</p>
    </div>
  );
}
