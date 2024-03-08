#include <stdio.h>
#define n 5
int a[n], r = -1, f = -1, data;

int insert()
{
    printf(" || Enter Value to Insert: || ");
    scanf("%d", &data);

    if (r < 0)
    {
        f = r = 0;
        a[r] = data;
    }
    else if ((r + 1) % n != f)
    {
        r = (r + 1) % n;
        a[r] = data;
    }
    else
    {
        printf("==> || Circular Queue Is Full || <==");
    }
}

int delete()
{
    if (f < 0)
    {
        printf("==> || Circular Queue Is Empty || <==");
    }
    else if (f == r && f != -1)
    {
        f = r = -1;
    }
    else
    {
        f = (f + 1) % n;
    }
}

int display()
{
    int i = f;
    if (f < 0)
    {
        printf("==> || Circular Queue Is Empty || <==");
    }
    else
    {
        do
        {
            printf("%d\t", a[i]);
            i = (i + 1) % n;
        } while (i != (r + 1) % n);
    }
}

int main()
{
    insert();
    insert();
    insert();
    insert();
    insert();
    delete();
    delete();
    delete();
    display();
    return 0;
}
