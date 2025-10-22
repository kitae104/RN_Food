class Meal {
    constructor(
        id, // 아이디
        categoryIds, // 카테고리 아이디
        title, // 제목
        affordability, // 가격대
        complexity, // 복잡도
        imageUrl, // 이미지 URL
        duration, // 소요 시간
        ingredients, // 재료
        steps, // 요리 순서
        isGlutenFree, // 글루텐 프리 여부
        isVegan, // 비건 여부
        isVegetarian, // 베지테리언 여부
        isLactoseFree // 락토스 프리 여부
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
        this.steps = steps;
        this.duration = duration;
        this.complexity = complexity;
        this.affordability = affordability;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;
