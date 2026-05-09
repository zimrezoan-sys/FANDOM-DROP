const myNumber = "8801881801333"; 


       


const products = [
  { id: 1, type: 'tshirt', cat: 'anime', name: 'Zoro Three-Sword Tee', price: '৳১২০০', priceNum: 1200, images: ['zoro-front.jpg', 'zoro-back.jpg', 'zoro-detail.jpg'] },
  { id: 2, type: 'jacket', cat: 'anime', name: 'Akatsuki Cloud Jacket', price: '৳২৫০০', priceNum: 2500, images: ['akatsuki-front.jpg', 'akatsuki-back.jpg', 'akatsuki-detail.jpg'] },
  { id: 3, type: 'cap', cat: 'superhero', name: 'Avengers Logo Cap', price: '৳৮০০', priceNum: 800, images: ['avengers-front.jpg', 'avengers-back.jpg', 'avengers-detail.jpg'] },
  { id: 4, type: 'tshirt', cat: 'superhero', name: 'Iron Man Arc Reactor', price: '৳১৩০০', priceNum: 1300, images: ['ironman-front.jpg', 'ironman-back.jpg', 'ironman-detail.jpg'] },
  { 
  id: 5, 
  type: 'tshirt', 
  cat: 'superhero', 
  name: 'Batman Bat-Signal Tee', 
  price: '৳১০০০',        // এটা এখন আপনার বর্তমান নতুন দাম
  priceNum: 1000,       // ক্যালকুলেশনের জন্য নাম্বারটিও ১০০০ করে দিন
  oldPrice: '৳১২৫০',    // এই দামের ওপর লাল কাটা দাগ পড়বে
  images: ['batman-tee-front.jpg', 'batman-tee-back.jpg', 'batman-tee-detail.jpg'] 
},

  { id: 6, type: 'jacket', cat: 'superhero', name: 'Batman Varsity Jacket', price: '৳২২০০', priceNum: 2200, images: ['batman-jk-front.jpg', 'batman-jk-back.jpg', 'batman-jk-detail.jpg'] },
  { id: 7, type: 'cap', cat: 'sports', name: 'Cricket Fan Snapback', price: '৳৭৫০', priceNum: 750, images: ['cricket-front.jpg', 'cricket-back.jpg', 'cricket-detail.jpg'] },
  { id: 8, type: 'tshirt', cat: 'sports', name: 'Football Jersey Edition', price: '৳১১০০', priceNum: 1100, images: ['football-front.jpg', 'football-back.jpg', 'football-detail.jpg'] },
  { id: 9, type: 'tshirt', cat: 'anime', name: 'Naruto Sage Mode Tee', price: '৳১২০০', priceNum: 1200, images: ['naruto-front.jpg', 'naruto-back.jpg', 'naruto-detail.jpg'] },
  { id: 10, type: 'cap', cat: 'superhero', name: 'Superman Emblem Cap', price: '৳৮৫০', priceNum: 850, images: ['superman-front.jpg', 'superman-back.jpg', 'superman-detail.jpg'] }
];

const bdData = {
  "ঢাকা": {
    "ঢাকা": ["মিরপুর", "মোহাম্মদপুর", "ধানমন্ডি", "গুলশান", "উত্তরা", "মতিঝিল", "তেজগাঁও", "রমনা", "লালবাগ", "পল্টন", "বাড্ডা", "সাভার", "ধামরাই", "কেরানীগঞ্জ", "দোহার", "নবাবগঞ্জ"],
    "গাজীপুর": ["গাজীপুর সদর", "কালিয়াকৈর", "কালীগঞ্জ", "কাপাসিয়া", "শ্রীপুর"],
    "নারায়ণগঞ্জ": ["নারায়ণগঞ্জ সদর", "বন্দর", "আড়াইহাজার", "রূপগঞ্জ", "সোনারগাঁও"],
    "নরসিংদী": ["নরসিংদী সদর", "বেলাবো", "মনোহরদী", "পলাশ", "রায়পুরা", "শিবপুর"],
    "মানিকগঞ্জ": ["মানিকগঞ্জ সদর", "সিংগাইর", "শিবালয়", "সাটুরিয়া", "হরিরামপুর", "ঘিওর", "দৌলতপুর"],
    "মুন্সিগঞ্জ": ["মুন্সিগঞ্জ সদর", "শ্রীনগর", "সিরাজদিখান", "লৌহজং", "টঙ্গিবাড়ী", "গজারিয়া"],
    "ফরিদপুর": ["ফরিদপুর সদর", "বোয়ালমারী", "আলফাডাঙ্গা", "মধুখালী", "ভাঙ্গা", "নগরকান্দা", "সালথা", "সদরমপুর", "চরভদ্রাসন"],
    "গোপালগঞ্জ": ["গোপালগঞ্জ সদর", "টুঙ্গিপাড়া", "কোটালীপাড়া", "কাশিয়ানী", "মুকসুদপুর"],
    "মাদারীপুর": ["মাদারীপুর সদর", "শিবচর", "কালকিনি", "রাজৈর"],
    "শরীয়তপুর": ["শরীয়তপুর সদর", "নড়িয়া", "জাজিরা", "গোসাইরহাট", "ডামুড্যা", "ভেদরগঞ্জ"],
    "রাজবাড়ী": ["রাজবাড়ী সদর", "গোয়ালন্দ", "পাংশা", "বালিয়াকান্দি", "কালুখালী"],
    "কিশোরগঞ্জ": ["কিশোরগঞ্জ সদর", "হোসেনপুর", "কটিয়াদী", "পাকুন্দিয়া", "তাড়াইল", "করিমগঞ্জ", "ইটনা", "মিঠামইন", "অষ্টগ্রাম", "নিকলী", "বাজিতপুর", "কুলিয়ারচর", "ভৈরব"],
    "টাঙ্গাইল": ["টাঙ্গাইল সদর", "মির্জাপুর", "বাসাইল", "গোপালপুর", "সখীপুর", "কালিহাতী", "ঘাটাইল", "ভূঞাপুর", "নাগরপুর", "मधুপুর", "ধনবাড়ী", "দেলদুয়ার"]
  },
  "চট্টগ্রাম": {
    "চট্টগ্রাম": ["চট্টগ্রাম সদর", "পতেঙ্গা", "পাঁচলাইশ", "ডবলমুরিং", "কোতোয়ালী", "হাটহাজারী", "সীতাকুণ্ড", "মিরসরাই", "পটিয়া", "বোয়ালখালী", "আনোয়ারা", "চন্দনাইশ", "সাতকানিয়া", "লোহাগাড়া", "ফটিকছড়ি", "রাউজান", "রাঙ্গুনিয়া", "সন্দ্বীপ"],
    "কক্সবাজার": ["কক্সবাজার সদর", "চাকরিয়া", "উখিয়া", "টেকনাফ", "রামু", "পেকুয়া", "মহেশখালী", "কুতুবদিয়া"],
    "কুমিল্লা": ["কুমিল্লা সদর", "চৌদ্দগ্রাম", "লাকসাম", "বরুড়া", "দাউদকান্দি", "চান্দিনা", "বুড়িচং", "ব্রাহ্মণপাড়া", "দেবিদ্বার", "মুরাদনগর", "লাঙ্গলকোট", "হোমনা", "তিতাস", "মেঘনা", "মনোহরগঞ্জ", "সদর দক্ষিণ"],
    "নোয়াখালী": ["নোয়াখালী সদর", "বেগমগঞ্জ", "সেনবাগ", "চাটখিল", "কোম্পানীগঞ্জ", "হাতিয়া", "সুবর্ণচর", "কবিরহাট", "সোনাইমুড়ী"],
    "ফেনী": ["ফেনী সদর", "ছাগলনাইয়া", "দাগনভূঞা", "পরশুরাম", "ফুলগাজী", "সোনাগাজী"],
    "চাঁদপুর": ["চাঁদপুর সদর", "হাজীগঞ্জ", "শাহরাস্তি", "কচুয়া", "ফরিদগঞ্জ", "মতলব উত্তর", "মতলব দক্ষিণ", "হাইমচর"],
    "লক্ষ্মীপুর": ["লক্ষ্মীপুর সদর", "রায়পুর", "রামগঞ্জ", "রামগতি", "কমলনগর"],
    "ব্রাহ্মণবাড়িয়া": ["ব্রাহ্মণবাড়িয়া সদর", "কসবা", "নবীনগর", "সরাইল", "নাসিরনগর", "আশুগঞ্জ", "বাঞ্ছারামপুর", "আখাউড়া", "বিজয়নগর"],
    "রাঙ্গামাটি": ["রাঙ্গামাটি সদর", "কাপ্তাই", "কাউখালী", "বাঘাইছড়ি", "লংগদু", "নানিয়ারচর", "রাজস্থলী", "বিলাইছড়ি", "জুরাছড়ি", "বরকল"],
    "খাগড়াছড়ি": ["খাগড়াছড়ি সদর", "দীঘিনালা", "পানছড়ি", "মাটিরাঙ্গা", "গুইমারা", "মানিকছড়ি", "রামগড়", "মহালছড়ি", "লক্ষ্মীছড়ি"],
    "বান্দরবান": ["বান্দরবান সদর", "রুমা", "থানচি", "রোয়াংছড়ি", "লামা", "আলীকদম", "নাইক্ষ্যংছড়ি"]
  },
  "রাজশাহী": {
    "রাজশাহী": ["বোয়ালিয়া", "মতিহার", "রাজপাড়া", "শাহ মখদুম", "পবা", "গোদাগাড়ী", "তানোর", "মোহনপুর", "বাগমারা", "দুর্গাপুর", "পুঠিয়া", "চারঘাট", "বাঘা"],
    "বগুড়া": ["বগুড়া সদর", "শাজাহানপুর", "শেরপুর", "ধুনট", "নন্দীগ্রাম", "কাহালু", "আদমদীঘি", "দুপচাঁচিয়া", "শিবগঞ্জ", "সোনাতলা", "গাবতলী", "সারিয়াকান্দি"],
    "পাবনা": ["পাবনা সদর", "ঈশ্বরদী", "ভাঙ্গুড়া", "চাটমোহর", "ফরিদপুর", "সুজানগর", "বেড়া", "সাঁথিয়া", "আটঘরিয়া"],
    "নাটোর": ["নাটোর সদর", "সিংড়া", "বড়াইগ্রাম", "লালপুর", "বাগাতিপাড়া", "গুরুদাসপুর", "নলডাঙ্গা"],
    "নওগাঁ": ["নওগাঁ সদর", "রানীনগর", "আত্রাই", "মহাদেবপুর", "ধামইরহাট", "পত্নীতলা", "বদলগাছী", "সাপাহার", "পোরশা", "নিয়ামতপুর", "মান্দা"],
    "চাঁপাইনবাবগঞ্জ": ["চাঁপাইনবাবগঞ্জ সদর", "শিবগঞ্জ", "গোমস্তাপুর", "নাচোল", "ভোলাহাট"],
    "জয়পুরহাট": ["জয়পুরহাট সদর", "পাঁচবিবি", "আক্কেলপুর", "ক্ষেতলাল", "কালাই"],
    "সিরাজগঞ্জ": ["সিরাজগঞ্জ সদর", "কাজীপুর", "বেলকুচি", "কামারখন্দ", "উল্লাপাড়া", "শাহজাদপুর", "রায়গঞ্জ", "তাড়াশ", "চৌহালী"]
  },
  "খুলনা": {
    "খুলনা": ["খুলনা সদর", "দৌলতপুর", "খালিশপুর", "خانজাহান আলী", "দিঘলিয়া", "রূপসা", "বটিয়াঘাটা", "ডুমুরিয়া", "ফুলতলা", "দাকোপ", "কয়রা", "তেরখাদা"],
    "বাগেরহাট": ["বাগেরহাট সদর", "ফকিরহাট", "মোল্লাহাট", "চিতলমারী", "মোড়েলগঞ্জ", "কচুয়া", "শরণখোলা", "মোংলা", "রামপাল"],
    "সাতক্ষীরা": ["সাতক্ষীরা সদর", "কলারোয়া", "তালা", "দেবহাটা", "কালীগঞ্জ", "শ্যামনগর", "আশাশুনি"],
    "যশোর": ["যশোর সদর", "অভয়নগর", "কেশবপুর", "চৌগাছা", "ঝিকরগাছা", "বাঘারপাড়া", "মণিরামপুর", "শার্শা"],
    "নড়াইল": ["নড়াইল সদর", "লোহাগড়া", "কালিয়া"],
    "মাগুরা": ["মাগুরা সদর", "শ্রীপুর", "মোহাম্মদপুর", "শালিখা"],
    "ঝিনাইদহ": ["ঝিনাইদহ সদর", "শৈলকুপা", "হরিণাকুণ্ডু", "কালীগঞ্জ", "কোটচাঁদপুর", "মহেশপুর"],
    "কুষ্টিয়া": ["কুষ্টিয়া সদর", "কুমারখালী", "খোকসা", "মিরপুর", "দৌলতপুর", "ভেড়ামারা"],
    "চুয়াডাঙ্গা": ["চুয়াডাঙ্গা সদর", "আলমডাঙ্গা", "দামুড়হুদা", "জীবননগর"],
    "মেহেরপুর": ["মেহেরপুর সদর", "মুজিবনগর", "গাংনী"]
  },
  "বরিশাল": {
    "বরিশাল": ["বরিশাল সদর", "বাকেরগঞ্জ", "বাবুগঞ্জ", "উজিরপুর", "বানারীপাড়া", "গৌরনদী", "মুলাদী", "মেহেন্দিগঞ্জ", "হিজলা", "আগাৈলঝাড়া"],
    "পটুয়াখালী": ["পটুয়াখালী সদর", "বাউফল", "দশমিনা", "গলাচিপা", "কলাপাড়া", "মির্জাগঞ্জ", "দুমকী", "রাঙ্গাবালী"],
    "ভোলা": ["ভোলা সদর", "বোরহানউদ্দিন", "লালমোহন", "চরফ্যাশন", "তজুমদ্দিন", "মনপুরা", "দৌলতখান"],
    "পিরোজপুর": ["পিরোজপুর সদর", "নাজিরপুর", "নেছারাবাদ", "ভাণ্ডারিয়া", "মঠবাড়িয়া", "কাউখালী", "ইন্দুরকানী"],
    "বরগুনা": ["বরগুনা সদর", "আমতলী", "তালতলী", "পাথরঘাটা", "বামনা", "বেতাগী"],
    "ঝালকাঠি": ["ঝালকাঠি সদর", "নলছিটি", "রাজাপুর", "কাঠালিয়া"]
  },
  "সিলেট": {
    "সিলেট": ["সিলেট সদর", "বিয়ানীবাজার", "গোলাপগঞ্জ", "ফেঞ্চুগঞ্জ", "বালাগঞ্জ", "বিশ্বনাথ", "জৈন্তাপুর", "জকিগঞ্জ", "কানাইঘাট", "কোম্পানীগঞ্জ", "গোয়াইনঘাট", "দক্ষিণ সুরমা", "ওসমানীনগর"],
    "সুনামগঞ্জ": ["সুনামগঞ্জ সদর", "ছাতক", "জগন্নাথপুর", "দোয়ারাবাজার", "তাহিরপুর", "ধর্মপাশা", "জামালগঞ্জ", "শাল্লা", "দিরাই", "বিশ্বম্ভরপুর", "মধ্যনগর"],
    "মৌলভীবাজার": ["মৌলভীবাজার সদর", "শ্রীমঙ্গল", "কমলগঞ্জ", "কুলাউড়া", "বড়লেখা", "জুড়ী", "রাজনগর"],
    "হবিগঞ্জ": ["হবিগঞ্জ সদর", "নবীগঞ্জ", "বাহুবল", "চুনারুঘাট", "মাধবপুর", "আজমিরীগঞ্জ", "বানিয়াচং", "লাখাই", "শায়েস্তাগঞ্জ"]
  },
  
"রংপুর": {
    "রংপুর": ["রংপুর সদর", "মিঠাপুকুর", "পীরগঞ্জ", "পীরগাছা", "কাউনিয়া", "গঙ্গাচড়া", "তারাগঞ্জ", "বদরগঞ্জ"],
    "দিনাজপুর": ["দিনাজপুর সদর", "বিরামপুর", "বীরগঞ্জ", "বোচাগঞ্জ", "ফুলবাড়ী", "চিরিরবন্দর", "ঘোড়াঘাট", "হাকিমপুর", "কাহারোল", "খানসামা", "নবাবগঞ্জ", "পার্বতীপুর"],
    "কুড়িগ্রাম": ["কুড়িগ্রাম সদর", "উলিপুর", "নাগেশ্বরী", "ভুরুঙ্গামারী", "ফুলবাড়ী", "রাজারহাট", "চিলমারী", "রৌমারী", "চর রাজিবপুর"],
    "গাইবান্ধা": ["গাইবান্ধা সদর", "গোবিন্দগঞ্জ", "পলাশবাড়ী", "সাদুল্লাপুর", "সুন্দরগঞ্জ", "সাঘাটা", "ফুলছড়ি"],
    "লালমনিরহাট": ["লালমনিরহাট সদর", "কালীগঞ্জ", "হাতীবান্ধা", "পাটগ্রাম", "আদিতমারী"],
    "নীলফামারী": ["নীলফামারী সদর", "সৈয়দপুর", "ডোমার", "ডিমলা", "জলঢাকা", "কিশোরগঞ্জ"],
    "ঠাকুরগাঁও": ["ঠাকুরগাঁও সদর", "পীরগঞ্জ", "বালিয়াডাঙ্গী", "রাণীশংকৈল", "হরিপুর"],
    "পঞ্চগড়": ["পঞ্চগড় সদর", "বোদা", "দেবীগঞ্জ", "তেঁতুলিয়া", "আটোয়ারী"]
  },
  "ময়মনসিংহ": {
    "ময়মনসিংহ": ["ময়মনসিংহ সদর", "মুক্তাগাছা", "ফুলবাড়ীয়া", "ত্রিশাল", "ভালুকা", "গফরগাঁও", "নান্দাইল", "ঈশ্বরগঞ্জ", "গৌরীপুর", "ধোবাউড়া", "ফুলপুর", "তারাকান্দা"],
    "জামালপুর": ["জামালপুর সদর", "মেলান্দহ", "ইসলামপুর", "দেওয়ানগঞ্জ", "বকশীগঞ্জ", "মাদারগঞ্জ", "সরিষাবাড়ী"],
    "নেত্রকোণা": ["নেত্রকোণা সদর", "বারহাট্টা", "কলমাকান্দা", "দুর্গাপুর", "কেন্দুয়া", "মদন", "মোহনগঞ্জ", "খালিয়াজুরী", "পূর্বধলা", "আটপাড়া"],
    "শেরপুর": ["শেরপুর সদর", "নকলা", "নালিতাবাড়ী", "ঝিনাইগাতী", "শ্রীবরদী"]
  }
};


let currentApparel = 'all';
let currentCategory = '';
let cart = [];

function toggleSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('productSearch');
  if (overlay.style.display === 'none' || overlay.style.display === '') {
    overlay.style.display = 'block';
    input.focus();
  } else {
    overlay.style.display = 'none';
    input.value = '';
    renderProducts();
  }
}

function setApparel(type, el) {
  document.querySelectorAll('.apparel-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  currentApparel = type;
  renderProducts();
}

function setCategory(cat, el) {
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  currentCategory = cat;
  renderProducts();
}

function toggleProduct(id, event) {
  if (event && (event.target.classList.contains('qty-btn') || event.target.closest('.qty-controls'))) return;
  const product = products.find(p => p.id === id);
  const index = cart.findIndex(item => item.id === id);
  if (index === -1) { cart.push({ ...product, qty: 1 }); } else { cart.splice(index, 1); }
  updateCartUI();
  renderProducts();
}

function updateQuantity(id, amount, event) {
  if (event) event.stopPropagation();
  const item = cart.find(p => p.id === id);
  if (!item) return;
  item.qty += amount;
  if (item.qty <= 0) { cart = cart.filter(p => p.id !== id); }
  updateCartUI();
  renderProducts();
}

function updateCartUI() {
  const shopBar = document.getElementById('shopBar');
  const cartCount = document.getElementById('cartCount');
  if (cart.length > 0) {
    shopBar.style.display = 'block';
    const totalItems = cart.reduce((acc, p) => acc + p.qty, 0);
    cartCount.innerText = `${totalItems} ${totalItems === 1 ? 'Item' : 'Items'}`;
  } else { shopBar.style.display = 'none'; }
}


function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const searchInput = document.getElementById('productSearch');
  const searchQuery = searchInput ? searchInput.value.toLowerCase() : "";

  const filtered = products.filter(p => {
    const apparelMatch = currentApparel === 'all' || p.type === currentApparel;
    const categoryMatch = currentCategory === '' || p.cat === currentCategory;
    const searchMatch = p.name.toLowerCase().includes(searchQuery);
    return apparelMatch && categoryMatch && searchMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--muted); padding: 40px;">No products found!</p>`;
    return;
  }

  // এখান থেকে ম্যাপ শুরু
  grid.innerHTML = filtered.map(p => { 
    const cartItem = cart.find(item => item.id === p.id);
    const isSelected = !!cartItem;
    const quantity = cartItem ? cartItem.qty : 0;
    const images = p.images || [p.img];

    // --- এখান থেকে ডবল কোডগুলো সরিয়ে দিয়ে শুধু এক সেট রাখা হলো ---
    
    // --- নতুন discount লজিক ---
    let discountHTML = ''; // শুরুতে খালি থাকবে
    let priceHTML = '';    // দামের জন্য (নাম পরিবর্তন করে priceHTML রাখা হলো যাতে নিচের সাথে মিলে যায়)

    if (p.oldPrice) {
      // যদি ডিসকাউন্ট থাকে
      discountHTML = `<div class="discount-label">DISCOUNT !!!</div>`;
      priceHTML = `
          <div class="price-box">
             <span class="old-price">${p.oldPrice}</span>
             <span class="current-price">${p.price}</span>
          </div>`;
    } else {
      // ডিসকাউন্ট না থাকলে
      priceHTML = `
          <div class="price-box">
             <span class="current-price">${p.price}</span>
          </div>`;
    }
    // -----------------------------
    
    // --- লজিক শেষ ---

    return `
      <div class="product-card ${isSelected ? 'selected' : ''}" onclick="toggleProduct(${p.id}, event)">
        
        ${discountHTML} 

        <div class="product-header">
          <span class="qty-label">${quantity} SELECTED</span>
          <div class="qty-controls">
            <button class="qty-btn plus" onclick="updateQuantity(${p.id}, 1, event)">+</button>
            <button class="qty-btn minus" onclick="updateQuantity(${p.id}, -1, event)">−</button>
          </div>
        </div>

        <div class="img-container">
          <div class="product-img-slider" onscroll="updateDots(this, ${p.id})">
            ${images.map(imgSrc => `<img src="${imgSrc}" alt="${p.name}">`).join('')}
          </div>
          
          <div class="dot-container" id="dots-${p.id}">
            ${images.map((_, index) => `<span class="dot ${index === 0 ? 'active' : ''}"></span>`).join('')}
          </div>
        </div>

        <div class="product-info">
          <div style="font-size:11px;color:var(--muted);text-transform:uppercase;">${p.cat}</div>
          <div style="font-weight:600;margin:5px 0;color:#fff;">${p.name}</div>
          
          ${priceHTML} 
          
          <span class="whatsapp-tag">${isSelected ? 'Added to Cart' : 'Swipe to see more'}</span>
        </div>
      </div>`;
  }).join('');
}





function openCheckoutModal() { document.getElementById('modalOverlay').classList.add('active'); }
function closeCheckoutModal() { document.getElementById('modalOverlay').classList.remove('active'); }


function updateDistricts() {
  const div = document.getElementById('divSelect').value;
  const distSelect = document.getElementById('distSelect');
  const upSelect = document.getElementById('upSelect');
  const notice = document.getElementById('deliveryNotice');
  
  // রিসেট করা
  distSelect.innerHTML = '<option value="">জেলা সিলেক্ট করুন</option>';
  upSelect.innerHTML = '<option value="">প্রথমে জেলা সিলেক্ট করুন</option>';
  upSelect.disabled = true;
  
  // বিভাগ পরিবর্তনের সময় নোটিশটি লুকিয়ে রাখা
  notice.style.display = "none";

  if (div && bdData[div]) {
    distSelect.disabled = false;
    Object.keys(bdData[div]).forEach(dist => {
      distSelect.innerHTML += `<option value="${dist}">${dist}</option>`;
    });
  } else {
    distSelect.disabled = true;
  }
}

function updateUpazilas() {
  const div = document.getElementById('divSelect').value;
  const dist = document.getElementById('distSelect').value;
  const upSelect = document.getElementById('upSelect');
  const notice = document.getElementById('deliveryNotice');

  upSelect.innerHTML = '<option value="">উপজেলা সিলেক্ট করুন</option>';

  if (dist && bdData[div][dist]) {
    upSelect.disabled = false;
    bdData[div][dist].forEach(up => {
      upSelect.innerHTML += `<option value="${up}">${up}</option>`;
    });

    // এখন এখানে চার্জ ক্যালকুলেশন হবে (জেলা সিলেকশনের পর)
    // লজিক: জেলা যদি "খুলনা" হয় তবে ৬০, নাহলে ১২০
    const charge = (dist === "খুলনা") ? 60 : 120;
    const locationText = (dist === "খুলনা") ? "খুলনা জেলার ভেতরে" : "খুলনা জেলার বাইরে";
    
    notice.innerText = `ডেলিভারি চার্জ: ৳${charge} (${locationText})`;
    notice.style.display = "block"; // জেলা সিলেক্ট করলে বক্সটি দেখাবে

  } else {
    upSelect.disabled = true;
    notice.style.display = "none"; // জেলা সিলেক্ট না থাকলে লুকিয়ে থাকবে
  }
}




function filterProducts() {
  renderProducts();
}

function sendWhatsAppOrder() {
  if (cart.length === 0) return;
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const division = document.getElementById('divSelect').value;
  const district = document.getElementById('distSelect').value;
  const upazila = document.getElementById('upSelect').value;
  const landmark = document.getElementById('custLandmark').value.trim();

  if (!name || !phone || !division || !district || !upazila) {
    alert("সব তথ্য পূরণ করুন!"); return;
  }

  // ডেলিভারি চার্জ ক্যালকুলেশন
  const deliveryCharge = (division === "খুলনা") ? 60 : 120;

  let totalPrice = 0;
  let productList = cart.map((p, i) => {
    totalPrice += (p.priceNum * p.qty);
    return `${i+1}. ${p.name} (x${p.qty})`;
  }).join('\n');

  // ডেলিভারি চার্জসহ চূড়ান্ত দাম
  const finalTotal = totalPrice + deliveryCharge;

  const message = `হ্যালো! আমি এই পণ্যগুলো নিতে চাই:\n\n${productList}\n\nসাবটোটাল: ৳${totalPrice}\nডেলিভারি চার্জ: ৳${deliveryCharge} (${division === "খুলনা" ? "খুলনার ভেতরে" : "খুলনার বাইরে"})\nমোট পরিশোধযোগ্য: ৳${finalTotal}\n\nডেলিভারি ঠিকানা:\nনাম: ${name}\nফোন: ${phone}\nঠিকানা: ${upazila}, ${district}, ${division}\nচেনার উপায়: ${landmark}`;
  
  window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`, '_blank');
}


function updateDots(slider, productId) {
    const scrollLeft = slider.scrollLeft;
    const width = slider.offsetWidth;
    // কোন ছবিটা সামনে আছে তা বের করা
    const activeIndex = Math.round(scrollLeft / width);
    
    const dots = document.querySelectorAll(`#dots-${productId} .dot`);
    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
