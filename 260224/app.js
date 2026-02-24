const stores = [
    {
        id: 1,
        name: "麺屋 ようすけ",
        category: "ラーメン",
        area: "佐野市",
        description: "青竹打ちのモチモチ麺が絶品。動物系の旨味が詰まった透き通るスープが特徴。",
        tags: ["佐野ラーメン", "行列店", "モチモチ麺"],
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800"
    },
    {
        id: 2,
        name: "青竹手打ラーメン 日向屋",
        category: "ラーメン",
        area: "佐野市",
        description: "毎日長蛇の列ができる人気店。食べ応えのある手打ち麺と大きなチャーシューが自慢。",
        tags: ["佐野ラーメン", "チャーシュー", "行列必至"],
        image: "https://images.unsplash.com/photo-1591814448473-7f47c215c1c0?q=80&w=800"
    },
    {
        id: 3,
        name: "YOKOKURA STORE HOUSE",
        category: "ラーメン",
        area: "小山市",
        description: "洗練された昆布水つけ麺が話題。おしゃれな店内で最高のつけ麺体験を。",
        tags: ["昆布水つけ麺", "おしゃれ", "進化系"],
        image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=800"
    },
    {
        id: 4,
        name: "ラーメン専科 竹末食堂",
        category: "ラーメン",
        area: "下野市",
        description: "鶏の旨さを極限まで引き出した濃厚なスープが絶品。何度も通いたくなる味。",
        tags: ["鶏白湯", "下野市", "人気店"],
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800"
    },
    {
        id: 5,
        name: "麺屋 穂華",
        category: "ラーメン",
        area: "下野市",
        description: "和出汁をベースにした上品な味わい。無添加にこだわり、体に優しい一杯を提供。",
        tags: ["和出汁", "無添加", "自治医大前"],
        image: "https://images.unsplash.com/photo-1618413665675-d145c2373a71?q=80&w=800"
    },
    {
        id: 6,
        name: "UNITED NOODLE アメノオト",
        category: "ラーメン",
        area: "佐野市",
        description: "カフェのようなおしゃれな空間で楽しむ、美しく洗練されたラーメン。女性にも大人気。",
        tags: ["おしゃれ", "醤油ラーメン", "佐野市"],
        image: "https://images.unsplash.com/photo-1547928576-a4a33230cbc5?q=80&w=800"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const storeList = document.getElementById('store-list');
    const featuredStoreContainer = document.getElementById('featured-store');
    const areaFilter = document.getElementById('area-filter');
    const categoryFilter = document.getElementById('category-filter');

    // 初期表示
    renderStores(stores);
    showRandomFeatured(stores);

    // フィルタリングイベント
    areaFilter.addEventListener('change', handleFilter);
    categoryFilter.addEventListener('change', handleFilter);

    function handleFilter() {
        const area = areaFilter.value;
        const category = categoryFilter.value;

        const filtered = stores.filter(store => {
            const matchArea = area === 'all' || store.area === area;
            const matchCategory = category === 'all' || store.category === category;
            return matchArea && matchCategory;
        });

        renderStores(filtered);
    }

    function renderStores(data) {
        storeList.innerHTML = '';
        if (data.length === 0) {
            storeList.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">該当するお店が見つかりませんでした。</p>';
            return;
        }

        data.forEach(store => {
            const card = document.createElement('div');
            card.className = 'store-card';
            card.innerHTML = `
                <img src="${store.image}" alt="${store.name}">
                <div class="store-info">
                    <span class="store-badge">${store.area}</span>
                    <span class="store-badge">${store.category}</span>
                    <h3>${store.name}</h3>
                    <p class="store-description">${store.description}</p>
                </div>
            `;
            storeList.appendChild(card);
        });
    }

    function showRandomFeatured(data) {
        const random = data[Math.floor(Math.random() * data.length)];
        featuredStoreContainer.innerHTML = `
            <img src="${random.image}" alt="${random.name}" class="hero-image">
            <div>
                <h3>${random.name}</h3>
                <p>${random.description}</p>
                <div style="margin-top: 10px;">
                    ${random.tags.map(tag => `<span class="store-badge">#${tag}</span>`).join('')}
                </div>
            </div>
        `;
    }
});
